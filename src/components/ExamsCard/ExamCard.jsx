import React, { useState } from 'react'
import TButton from '../ui/Button/TButton';
import styles from './ExamCard.module.css'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { EXAM } from '../../routes/routes';

const ExamCard = (props) => {

    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    
    const { id, title, description, completed } = props;

    const goToExam = () => {
        navigate('/exams/' + (id || 1));
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
            { 
                completed ? 
                <button className={styles.button}>{ t('examCard.completed')}</button> 
                : 
                <button className={styles.button} onClick={goToExam}>{ t('examCard.start')}</button>
            }
        </div>
    )
}

export default ExamCard