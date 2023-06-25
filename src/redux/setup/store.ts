import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { useDispatch } from "react-redux";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";
export const config = {
  key: "root",
  storage: storage,
};
const persistedReducer = persistReducer(config, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
