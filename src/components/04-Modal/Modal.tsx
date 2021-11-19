import React, {FC} from 'react';
import s from './Modal.module.css'


interface ModalType {
    modal: boolean
    setModal: (value: boolean) => void
}


const Modal: FC<ModalType> = ({modal, setModal, children}) => {
    const modalClassName = `${s.modal} ${modal ? s.active : ""}`;
    const modalContentClassName = `${s.content} ${modal ? s.active : ""}`;
    return (
        <div className={modalClassName} onClick={ () => setModal(false)}>
            <div className={modalContentClassName} onClick={e =>  e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;