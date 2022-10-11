import React from 'react'
import TButton from '../../components/ui/Button/TButton'
import styles from './ExamView.module.css'

const ExamView = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info_container}>
                <h1>Evaluacion Full Stack Developer</h1>
                <p>
                    En esta evaulacion buscamos evaluar tu senority. 
                    El resultado de la evaluación lo vas a poder ver una vez terminada la misma.
                </p>
            </div>
            <div className={styles.questions_container}>
                <div>
                    <h2>Verdadero o falso: HTML es un lenguaje de programación.</h2>
                    <span>Verdadero | Falso</span>
                </div>
                <div>
                    <h2>Verdadero o falso: HTML es un lenguaje de programación.</h2>
                    <p>Opcion 1</p>
                    <p>Opcion 2</p>
                    <p>Opcion 3</p>
                </div>
                <div>
                    <h2>Verdadero o falso: HTML es un lenguaje de programación.</h2>
                    <textarea>Your answer here...</textarea>
                </div>
            </div>
            <div className={styles.button_container}>
                <TButton title='Submit'/>
            </div>
        </div>
    )
}

export default ExamView