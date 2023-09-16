import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./user";
import { persistReducer, persistStore } from "redux-persist";


const persistConfig = {
  key: "root",
  storage
};
const rootReducer = combineReducers({
  user: UserReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer
});
export const persistor = persistStore(store);

export default store;
