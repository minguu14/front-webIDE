import { createSlice } from "@reduxjs/toolkit";
import {ContainerListType} from "../../models/containerListsType";

type ContainerState = {
    containerLists: ContainerListType[];
    clickedContainer: ContainerListType;
    editId: string;
}

const initialState: ContainerState = {
    containerLists: [],
    clickedContainer: {
        id: "",
        title: "",
        stack: "",
        performance: "",
    },
    editId: "",
}

export const containerSlice = createSlice({
    name: "container",
    initialState,
    reducers: {
        createContainer: (state, action) => {
            state.containerLists = [...state.containerLists, action.payload]
        },
        editContainer: (state, action) => {
            const {editId, stack, containerTitle, performance } = action.payload;
            state.containerLists.map((list) => {
                if(list.id === editId) {
                    list.stack = stack;
                    list.title = containerTitle;
                    list.performance = performance;
                }
                return list;
            })
        },
        getEditId: (state, action) => {
            state.editId =  action.payload;
        },
        deleteContainer: (state, action) => {
            const deletedData = state.containerLists.filter((list) => list.id !== action.payload);
            state.containerLists = deletedData;
        },
        clickedContainer: (state, action) => {
            state.clickedContainer = action.payload;
        }
    }
})

export const { createContainer, deleteContainer, clickedContainer, editContainer, getEditId } = containerSlice.actions;
export default containerSlice.reducer;