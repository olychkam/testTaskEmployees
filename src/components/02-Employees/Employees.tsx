import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import s from './employees.module.css'
import {AppRootStateType} from "../../redux/store";
import {getUsersList, removeUserTC} from "../../redux/usersReducer";
import {Users} from "./User/Users";

export const Employees = () => {
    const users = useSelector((state: AppRootStateType) => state.users.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersList())
    }, [dispatch])

    const removeUser = (id: number) => {
        console.log('remove user id:', id)
        dispatch(removeUserTC(id))
    }

    const mappedUsers = useCallback(() => {
        return users && users.map((user, index) => {
            return <Users key={user.id}
                          user={user}
                          removeUser={removeUser}
            />
        })
    }, [users])

    return (
        <div className={s.container}>
            {mappedUsers()}
        </div>
    )
}