import {
  Action,
  ThunkAction,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import usersSliceReducer from "../store/reducers/usersSlice";
import userSliceReducer from "../store/reducers/userSlice";

const reducer = combineReducers({
  users: usersSliceReducer,
  user: userSliceReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["users"],
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, reducer),
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
