import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
    createModal: boolean;
    editModal: boolean;
    infoModal: boolean;
}

const initialState: ModalState = {
    createModal: false,
    editModal: false,
    infoModal: false,
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        OpenCreateModal: (state, action) => {
            state.createModal = action.payload;
        },
        OpenEditModal: (state, action) => {
            state.editModal = action.payload;
        },
        OpenInfoModal: (state, action) => {
            state.infoModal = action.payload;
        }
    }
})

export const { OpenCreateModal, OpenEditModal, OpenInfoModal } = modalSlice.actions;
export default modalSlice.reducer;