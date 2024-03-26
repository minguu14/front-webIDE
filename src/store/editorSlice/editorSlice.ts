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

type EditorState = {
    treeItems: TreeItemData[];
    selectedItem: string | null;
    selectedItemCode: string | undefined;
    selectedDirectory: any[] | undefined;
    outPut: string[];
    isLoading: boolean;
    isError: boolean;
  }

const initialState: EditorState = {
    treeItems: [],
    selectedItem: "",
    selectedItemCode: "",
    selectedDirectory: [],
    outPut: [""],
    isLoading: false,
    isError: false,
}

export const editorSlice = createSlice({
    name: "editor",
    initialState,
    reducers: {
        addNewFolder: (state, action) => {
          // 선택한 폴더에 생성.
           const addFolderToParent = (parentId: string, newFolder: TreeItemData) => {
                const updatedTreeItems = state.treeItems.map(item => {
                    if (item.id === parentId && !item.label?.includes(".")) {
                      return {
                        ...item,
                        children: item.children ? [...item.children, newFolder = {...newFolder, treeDirectory: item.treeDirectory && [...item.treeDirectory, newFolder.label]}] : [newFolder],
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
            // 선택한 폴더의 child에 생성.
           const addFolderToParentInChild = (children: TreeItemData[], parentId: string, newFolder: TreeItemData): TreeItemData[] => {
                return children.map(child => {
                    if (child.id === parentId && !child.label?.includes(".")) {
                        return {
                          ...child,
                          children: child.children ? [...child.children, newFolder= {...newFolder, treeDirectory: child.treeDirectory && [...child.treeDirectory, newFolder.label]}] : [newFolder],
                          
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
            
            const { input, title } = action.payload;
            
            if(input?.includes(".")) return;
            const newFolder: TreeItemData = {
                id: v4(),
                type: "folder",
                treeDirectory: [title,input],
                label: input,
                icon: "",
                children: [],
            }
            
            if(state.selectedItem){
                addFolderToParent(state.selectedItem, newFolder)
            }else{
              state.treeItems.push(newFolder);
            }
        },
        addNewFile: (state, action) => {
            const addFileToParent = (parentId: string, newFile: TreeItemData) => {
                const updatedTreeItems = state.treeItems.map(item => {
                    if (item.id === parentId && !item.label?.includes(".")) {
                      return {
                        ...item,
                        children: item.children ? [...item.children, newFile] : [newFile]
                      };
                    } else if (item.children && !item.label?.includes(".")) {
                      return {
                        ...item,
                        children: addFileToParentInChild(item.children, parentId, newFile)
                      };
                    }
                    return item;
                  });
                  state.treeItems = updatedTreeItems;
            }
           const addFileToParentInChild = (children: TreeItemData[], parentId: string, newFile: TreeItemData): TreeItemData[] => {
                return children.map(child => {
                    if (child.id === parentId && !child.label?.includes(".")) {
                        return {
                          ...child,
                          children: child.children ? [...child.children, newFile] : [newFile]
                        };
                      } else if (child.children && !child.label?.includes(".")) {
                        return {
                          ...child,
                          children: addFileToParentInChild(child.children, parentId, newFile)
                        };
                      }
                      return child;
                })
            }

            if(action.payload?.includes(".")){
                const newFile: TreeItemData = {
                  id: v4(),
                  type: "text",
                  label: action.payload,
                  code: "",
                  icon: "file",
                };
                if (state.selectedItem) {
                  addFileToParent(state.selectedItem, newFile);
                } else {
                   state.treeItems.push(newFile);
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
        selectedDirectoryTest: (state, action) => {
            state.selectedDirectory = action.payload;
        },
        updateCode: (state, action) => {
          const save = (items: TreeItemData[], itemId: string | null) => {
            return items.filter((item) => {
              if(item.id === itemId && item.type === "text"){
                item.code = state.selectedItemCode;
              }else if(item.children){
                item.children = save(item.children, itemId);
                if(item.children.length === 0){
                  delete item.children;
                }
              }
              return true;
            })
          }
          const updateCodeItem = save(state.treeItems, action.payload);
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
        },
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


export const { addNewFolder, addNewFile, selectItemId, selectedDirectoryTest, getEditorCode, deleteItem, updateCode, selectItemCode, isOutputError } = editorSlice.actions;
export default editorSlice.reducer;