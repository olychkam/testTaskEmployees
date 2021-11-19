import { configureStore } from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {usersReducer} from "./usersReducer";

const rootReducer = combineReducers({
    users:usersReducer
})


export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store
