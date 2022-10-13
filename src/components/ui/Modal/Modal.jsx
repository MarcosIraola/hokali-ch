import React from 'react'
import TButton from '../Button/TButton';
import styles from './Modal.module.css'

const Modal = (props) => {
    
    const { showModal, mainFunction, cancelClick } = props;

    return (
        <div className={styles.container} data-disabled={showModal}>
            <div className={styles.modal}>
                <h1 className={styles.title}>¿Deseas continuar?</h1>
                <p className={styles.text}>Enviaras tus respuestas.</p>
                <div className={styles.button_container}>
                    <TButton title="Enviar" function_1={mainFunction}/>
                    <button className={styles.cancel_button} onClick={cancelClick}>Cancelar</button>
                </div>
                
            </div>
        </div>
    )
}

export default Modal