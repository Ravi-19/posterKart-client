import { combineReducers, configureStore } from "@reduxjs/toolkit";
import catagoryReducer from "./slices/catagorySlice";
import cartReducer from "./slices/cartSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import {thunk} from 'redux-thunk';


const persistConfig = {
  key: 'root',
  storage,
}


const rootReducer = combineReducers({
        catagoryReducer , 
        cartReducer
  })

const persistedReducer = persistReducer(persistConfig, rootReducer) ; 

export const store = configureStore({
    reducer:persistedReducer,
    devTools: import.meta.env.NODE_ENV !== 'production' , 
   // middleware: (thunk) => thunk()
   middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
}); 



export const persistor = persistStore(store)