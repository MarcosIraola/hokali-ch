import React from 'react'
import styles from './ExamView.module.css'

const ExamView = () => {
    return (
        <div className={styles.container}>
            <h1>Evaluacion Full Stack Developer</h1>
            <p>
                En esta evaulacion buscamos evaluar tu senority. 
                El resultado de la evaluación lo vas a poder ver una vez terminada la misma.
            </p>
            <div className={styles.questions_container}>
                <div>
                    <h2>Verdadero o falso: HTML es un lenguaje de programación.</h2>
                </div>
            </div>
        </div>
    )
}

export default ExamView