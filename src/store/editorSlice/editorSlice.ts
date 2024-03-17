import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TreeItemData } from "../../models/treeItemType";
import { v4 } from "uuid";
import { checkCode } from "../../api/consoleApi";

export const fetchCode:any = createAsyncThunk(
  "editor/fetchCode",
  async ({stack, sourceCode}: any, thunkApi) => {
    try{
      const { run: result } = await checkCode(stack, sourceCode);
      result.stderr ? thunkApi.dispatch(isOutputError(true)) : thunkApi.dispatch(isOutputError(false))
      return result.output.split("\n");
    } catch(err) {
      return thunkApi.rejectWithValue(err);
    }
  }
)

type initialData = {
    treeItems: TreeItemData[];
    selectedItem: string | null;
    selectedItemCode: string | undefined;
    outPut: string[];
    isLoading: boolean;
    isError: boolean;
  }

const initialState: initialData = {
    treeItems: [],
    selectedItem: "",
    selectedItemCode: "",
    outPut: [""],
    isLoading: false,
    isError: false,
}

export const editorSlice = createSlice({
    name: "editor",
    initialState,
    reducers: {
        addNewFolder: (state, action) => {
           const addFolderToParent = (parentId: string, newFolder: TreeItemData) => {
                const updatedTreeItems = state.treeItems.map(item => {
                    if (item.id === parentId && !item.label?.includes(".")) {
                      return {
                        ...item,
                        children: item.children ? [...item.children, newFolder] : [newFolder]
                      };
                    } else if (item.children && !item.label?.includes(".")) {
                      return {
                        ...item,
                        children: addFolderToParentInChild(item.children, parentId, newFolder)
                      };
                    }
                    return item;
                  });
                  state.treeItems = updatedTreeItems;
            }
           const addFolderToParentInChild = (children: TreeItemData[], parentId: string, newFolder: TreeItemData): TreeItemData[] => {
                return children.map(child => {
                    if (child.id === parentId && !child.label?.includes(".")) {
                        return {
                          ...child,
                          children: child.children ? [...child.children, newFolder] : [newFolder]
                        };
                      } else if (child.children && !child.label?.includes(".")) {
                        return {
                          ...child,
                          children: addFolderToParentInChild(child.children, parentId, newFolder)
                        };
                      }
                      return child;
                })
            }

            if(action.payload?.includes(".")) return;
            const newFolder: TreeItemData = {
                id: v4(),
                type: "folder",
                label: action.payload,
                icon: "",
                children: [],
            }
            if(state.selectedItem){
                addFolderToParent(state.selectedItem, newFolder);
            }else{
              state.treeItems.push(newFolder);
            }
        },
        addNewFile: (state, action) => {
            const addFolderToParent = (parentId: string, newFolder: TreeItemData) => {
                const updatedTreeItems = state.treeItems.map(item => {
                    if (item.id === parentId && !item.label?.includes(".")) {
                      return {
                        ...item,
                        children: item.children ? [...item.children, newFolder] : [newFolder]
                      };
                    } else if (item.children && !item.label?.includes(".")) {
                      return {
                        ...item,
                        children: addFolderToParentInChild(item.children, parentId, newFolder)
                      };
                    }
                    return item;
                  });
                  state.treeItems = updatedTreeItems;
            }
           const addFolderToParentInChild = (children: TreeItemData[], parentId: string, newFolder: TreeItemData): TreeItemData[] => {
                return children.map(child => {
                    if (child.id === parentId && !child.label?.includes(".")) {
                        return {
                          ...child,
                          children: child.children ? [...child.children, newFolder] : [newFolder]
                        };
                      } else if (child.children && !child.label?.includes(".")) {
                        return {
                          ...child,
                          children: addFolderToParentInChild(child.children, parentId, newFolder)
                        };
                      }
                      return child;
                })
            }

            if(action.payload?.includes(".")){
                const newFolder: TreeItemData = {
                  id: v4(),
                  type: "text",
                  label: action.payload,
                  code: "",
                  icon: "file",
                };
                if (state.selectedItem) {
                    addFolderToParent(state.selectedItem, newFolder);
                } else {
                   state.treeItems.push(newFolder);
                }
              }
        },
        deleteItem: (state, action) => {
            const deleteItemFromTree = (items: TreeItemData[], itemId: string | null): TreeItemData[] => {
                return items.filter((item) => {
                  if (item.id === itemId) {
                    return false;
                  } else if (item.children) {
                    item.children = deleteItemFromTree(item.children, itemId);
                    if (item.children.length === 0) {
                      delete item.children;
                    }
                  }
                  return true;
                });
              };

              const updatedTreeItems = deleteItemFromTree(state.treeItems, action.payload);
              state.treeItems = updatedTreeItems;
        },
        selectItemId: (state, action) => {
            state.selectedItem = action.payload;
        },
        selectItemCode: (state, action) => {
            state.selectedItemCode = action.payload;
        },
        updateCode: (state, action) => {
          const test = (items: TreeItemData[], itemId: string | null) => {
            return items.filter((item) => {
              if(item.id === itemId && item.type === "text"){
                item.code = state.selectedItemCode;
              }else if(item.children){
                item.children = test(item.children, itemId);
                if(item.children.length === 0){
                  delete item.children;
                }
              }
              return true;
            })
          }
          const updateCodeItem = test(state.treeItems, action.payload);
          state.treeItems = updateCodeItem;
        },
        getEditorCode: (state, action) => {
            state.selectedItemCode = action.payload;
        },
        getOutput: (state, action) => {
          state.outPut = action.payload;
        },
        isOutputError: (state, action) => {
          state.isError = action.payload;
        }
    },
    extraReducers: (builder) => {
      builder
      .addCase(fetchCode.pending, (state) => {
        state.isLoading = true;   
      })
      .addCase(fetchCode.fulfilled, (state, action) => {
        state.isLoading = false;
        state.outPut = action.payload;
      })
      .addCase(fetchCode.rejected, (state) => {
        state.isLoading = false;
      })
    }
})


export const { addNewFolder, addNewFile, selectItemId,getEditorCode, deleteItem, updateCode, selectItemCode, isOutputError } = editorSlice.actions;
export default editorSlice.reducer;