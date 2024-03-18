import {
  Action,
  ThunkAction,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import usersSliceReducer from "./reducers/usersSlice";
import userSliceReducer from "./reducers/userSlice";
import containerReducer from "./containerSlice/containerSlice";
import editorReducer from "./editorSlice/editorSlice";
import modalReducer from "./modalSlice/modalSlice";

const reducer = combineReducers({
  users: usersSliceReducer,
  user: userSliceReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["users"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    container: containerReducer,
    editor: editorReducer,
    persist: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
