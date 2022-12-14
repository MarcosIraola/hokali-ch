import React, { useState, useEffect } from 'react'
import styles from './Start.module.css'
import ExamCard from '../../components/ExamsCard/ExamCard'
import { useGetExamsQuery } from '../../redux/examsApi';
import { useTranslation } from 'react-i18next';

const Start = () => {

    const { t, i18n } = useTranslation();
    const { data: exams, isFetching } = useGetExamsQuery();

    const [completedExams, setCompletedExams] = useState([])
    const [incompletedExams, setIncompletedExams] = useState([])

    useEffect(() => {
        let completed = [];
        let incompleted = [];

        exams?.exams.forEach(exam => {
            if(exam.completed) {
                completed.push(exam)
            } else {
                incompleted.push(exam)
            }
        });

        setCompletedExams(completed);
        setIncompletedExams(incompleted);
    }, [isFetching]);

    return (
        <div className={styles.container}>
            <h1>{ t('start.welcome')}</h1>
            <div className={styles.completed_container}>
                <div>
                    <h2 className={styles.title}>{ t('start.completed')}</h2>
                </div>
                {
                    completedExams?.length < 1
                    ?
                    <span>{ t('start.number_completed')}</span>
                    :
                    completedExams?.map((exam, index) => (
                        <ExamCard
                            key={index}
                            id={exam.id} 
                            title={exam.title} 
                            description={exam.description}
                            completed
                        />
                    ))
                }
            </div>
            <div className={styles.incompleted_container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{ t('start.incompleted')}</h2>
                </div>
                {
                    incompletedExams?.length < 1 
                    ? 
                    <span>{ t('start.number_incompleted')}</span>
                    :
                    incompletedExams?.map((exam, index) => (
                        <ExamCard
                            key={index}
                            id={exam.id} 
                            title={exam.title} 
                            description={exam.description}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Start