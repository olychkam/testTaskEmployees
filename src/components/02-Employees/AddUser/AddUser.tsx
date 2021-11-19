import React, {ChangeEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {addUser} from "../../../redux/usersReducer";
import Modal from "../../04-Modal/Modal";
import {Button} from "@material-ui/core";
import s from './AddUser.module.css'

export const AddUser = () => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch();

    const addUserClickHandler = () => {
        if (firstName && lastName) {
            dispatch(addUser({first_name: firstName, last_name: lastName}));
            setFirstName('')
            setLastName('')
        }
    }
    const onFirstNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    }
    const onLastNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    }

    return (
        <div>
            <div className={s.btn}>
                <Button onClick={() => {
                    setOpen(true)
                }}>Add User
                </Button>
            </div>
            <Modal
                modal={open}
                setModal={setOpen}
            >
                <div className={s.form}>
                    <h2>Add a new employee</h2>
                    <input type={'text'}
                           value={firstName}
                           id={'first-name'}
                           placeholder={'First name'}
                           onChange={onFirstNameChangeHandler}
                    />
                    <input type={'text'}
                           value={lastName}
                           id={'last-name'}
                           placeholder={'Last name'}
                           onChange={onLastNameChangeHandler}
                    />
                    <div>
                        <button onClick={addUserClickHandler} disabled={!firstName || !lastName}>Accept</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}