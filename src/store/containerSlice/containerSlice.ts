import { createSlice } from "@reduxjs/toolkit";
import {ContainerListType} from "../../models/containerListsType";

type initialData = {
    containerLists: ContainerListType[];
    clickedContainer: ContainerListType;
}

const initialState: initialData = {
    containerLists: [],
    clickedContainer: {
        id: "",
        title: "",
        stack: "",
        performance: "",
    }
}

export const containerSlice = createSlice({
    name: "container",
    initialState,
    reducers: {
        createContainer: (state, action) => {
            state.containerLists = [...state.containerLists, action.payload]
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

export const { createContainer, deleteContainer, clickedContainer } = containerSlice.actions;
export default containerSlice.reducer;