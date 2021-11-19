import React from 'react'
import {UserType} from "../../../api/api";
import s from './Users.module.css'

type UsersTypeProps = {
    user: UserType,
    removeUser: (id: number) => void
}

export const Users: React.FC<UsersTypeProps> = ({user, removeUser}) => {
    return (
        <div className={s.employeesOverlay}>
            <fieldset className={s.user}>
                <legend> {user.first_name} {user.last_name}</legend>
                <img src={user.avatar} alt="Avatar"/>
                <p>email: {user.email}</p>

                <button onClick={() => removeUser(user.id)}>delete</button>

            </fieldset>
        </div>
    )
}