import React, { useEffect, useState } from 'react'
import TButton from '../../components/ui/Button/TButton'
import styles from './ExamView.module.css'
import {useParams} from 'react-router-dom'
import QuestionCard from '../../components/QuestionCard/QuestionCard'

const ExamView = () => {

    const params = useParams();
    const [exam, setExam] = useState();

    useEffect(() => {
        const url = `http://127.0.0.1:5432/exams/${params.id}`;
        const options = {
            method: 'GET',
            headers: {"Content-type": "application/json"},
        };
        fetch(url, options)
            .then(response => response.json())
            .then(payload => {
                setExam(payload);
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.info_container}>
                <h1>{exam?.title}</h1>
                <p>{exam?.description}</p>
            </div>
            <div className={styles.questions_container}>
                {
                    exam?.questions.map((question, index) => (
                        <QuestionCard key={index} question={question}/>
                    ))
                }
            </div>
            <div className={styles.button_container}>
                <TButton title='Submit'/>
            </div>
        </div>
    )
}

export default ExamView