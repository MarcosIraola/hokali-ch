import React from 'react'
import TButton from '../Button/TButton';
import styles from './Modal.module.css'

const Modal = (props) => {
    
    const { showModal, mainFunction, score } = props;

    return (
        <div className={styles.container} data-disabled={showModal}>
            <div className={styles.modal}>
                <h1 className={styles.title}>Exam subbmited and reviewd!</h1>
                <p className={styles.text}>Your score was {score}/100</p>
                <div className={styles.button_container}>
                    <TButton title="Enviar" function_1={mainFunction}/>
                </div>
                
            </div>
        </div>
    )
}

export default Modal