import React from 'react';
import {NavLink} from 'react-router-dom'
import s from './styles.module.css'

export const Header = () => {
    return (
        <div className={s.header}>
            <NavLink className={s.nav} to="/home">Home</NavLink>
            <NavLink className={s.nav} to="/employees">Employees</NavLink>
        </div>
    )
}