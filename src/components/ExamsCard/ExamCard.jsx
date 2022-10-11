import React, { useState } from 'react'
import TButton from '../ui/Button/TButton';
import styles from './ExamCard.module.css'

const ExamCard = (props) => {
    
    const { id, title, description, completed } = props;
    // const [completed, setCompleted] = useState(false);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
            { completed ? <button className={styles.button}>View Details</button> : <button className={styles.button}>Start</button>}
        </div>
    )
}

export default ExamCard