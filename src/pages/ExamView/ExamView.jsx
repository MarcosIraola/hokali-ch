import React, { useEffect, useState } from 'react'
import TButton from '../../components/ui/Button/TButton'
import styles from './ExamView.module.css'
import {useParams} from 'react-router-dom'
import QuestionCard from '../../components/QuestionCard/QuestionCard'
import Modal from '../../components/ui/Modal/Modal'
import { useGetExamsQuery } from '../../redux/examsApi';
import { useNavigate } from 'react-router-dom';

const ExamView = () => {

    const navigate = useNavigate();
    const params = useParams();
    const { data: exams, isFetching } = useGetExamsQuery();
    const [exam, setExam] = useState(null);

    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        const url = `http://127.0.0.1:5432/exams/${params.id}`;
        const options = {
            method: 'GET',
            headers: {
                "Content-type": "application/json",
                "x-status-code": "200"
            },
        };
        fetch(url, options)
            .then(response => response.json())
            .then(payload => {
                if(payload.status == 400) {
                    console.log('ok')
                }
                setExam(payload);
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    // useEffect(() => {
    //     exams.exams.filter((exam) => {
    //         if(exam.id == params.id) {
    //             setExam(exam)
    //         }
    //     })
    // }, [isFetching])

    return (
        <div className={styles.container}>

            <Modal showModal={showModal} cancelClick={() => setShowModal(false)}/>
            <span onClick={() => navigate(-1)} className={styles.goBack}>&#x3c; Go back</span>
            <div className={styles.info_container}>
                <h1>{exam?.title}</h1>
                <p>{exam?.description}</p>
            </div>
            <div className={styles.questions_container}>
                {
                    exam?.questions?.map((question, index) => (
                        <div className={styles.question} key={index}>
                            <QuestionCard key={index} question={question}/>
                        </div>
                    ))
                }
                <div className={styles.error_container}>
                    <p>Ups, hubo un error. Vuelva a intentarlo.</p>
                </div>
                <div className={styles.button_container}>
                    <TButton title='Submit' function_1={() => setShowModal(true)}/>
                    <TButton title='Go Back' function_1={() => navigate(-1)}/>
                </div>
            </div>
           
        </div>
    )
}

export default ExamView