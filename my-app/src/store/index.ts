import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { PERSISTED_REDUCERS } from "constants/whiteList.persisted";

import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist';

import expireReducer from "redux-persist-expire";
import storage from "redux-persist/lib/storage"
import homeReducer from "containers/Home/home.slice"

const rootReducer = combineReducers({
    home: homeReducer

})

const { ROOT: { PRODUCTS, ORDER_CART, RECHARGE_TYPE } } = PERSISTED_REDUCERS

const persistConfig = {
    key: "root",
    storage,
    whitelist: [PRODUCTS, ORDER_CART, RECHARGE_TYPE],
    transform: expireReducer(PRODUCTS, {
        expireSeconds: Number(process.env.NEXT_PUBLIC_EXPIRE_CACHE_PRODUCT) || 300,
        expiredState: {},
        autoExpire: true
    })
}

const persistedReducer =
    persistReducer(
        persistConfig,
        rootReducer
    )

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;