import React, { useEffect, useState } from 'react'
import TButton from '../../components/ui/Button/TButton'
import styles from './ExamView.module.css'
import {useParams} from 'react-router-dom'
import QuestionCard from '../../components/QuestionCard/QuestionCard'
import Modal from '../../components/ui/Modal/Modal'

const ExamView = () => {

    const params = useParams();
    const [exam, setExam] = useState();

    const [showModal, setShowModal] = useState(false)

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

            <Modal showModal={showModal} cancelClick={() => setShowModal(false)}/>

            <div className={styles.info_container}>
                <h1>{exam?.title}</h1>
                <p>{exam?.description}</p>
            </div>
            <div className={styles.questions_container}>
                {
                    exam?.questions.map((question, index) => (
                        <div className={styles.question}>
                            <QuestionCard key={index} question={question}/>
                        </div>
                    ))
                }
            </div>
            <div className={styles.button_container}>
                <TButton title='Submit' function_1={() => setShowModal(true)}/>
            </div>
        </div>
    )
}

export default ExamView