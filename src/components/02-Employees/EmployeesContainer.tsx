import React from 'react';
import {AddUser} from "./AddUser/AddUser";
import {Employees} from "./Employees";
import s from './employees.module.css'

export const EmployeesContainer=()=>{
    return(
        <div className={s.empl}>
            <AddUser/>
            <Employees/>
        </div>
    )
}