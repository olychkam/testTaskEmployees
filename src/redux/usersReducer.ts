import {createSlice, PayloadAction, ThunkDispatch} from '@reduxjs/toolkit'
import {usersAPI, UserType} from "../api/api";
import {Dispatch} from "react";

const initialState = {
    users: [] as Array<UserType>,
}

const slice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<{ user: Array<UserType> }>) => {
            console.log(state.users)
            state.users = action.payload.user
        },
        removeUser: (state, action: PayloadAction<{ id: number }>) => {
            const index = state.users.findIndex(tl => tl.id === action.payload.id);
            if (index > -1) {
                state.users.splice(index, 1);
            }
        },
        addUser(state, action: PayloadAction<{ first_name: string, last_name: string }>) {
            state.users = [{
                id: Math.floor(Math.random() * 1000),
                email: '',
                avatar: '',
                ...action.payload
            }, ...state.users];
        }
    }
})

export const usersReducer = slice.reducer


export const {setUsers, removeUser, addUser} = slice.actions


export const getUsersList = () => async (dispatch: Dispatch<any>) => {
    try {
        const {
            status,
            data: {data}
        } = await usersAPI.fetchUsers()
        if (status === 200) {
            dispatch(setUsers({user: data}))
        } else {
            console.log('ошибка получения данных от сервера')
        }
    } catch (error) {
        console.log('Error')
    }
}
export const removeUserTC = (id: number) => async (dispatch: Dispatch<any>) => {
    try {
        const {status} = await usersAPI.deleteUser(id);
        if (status === 204) {
            dispatch(removeUser({id}));
        }
    } catch (error) {
        console.log('Error: ', {error});
    }
};
