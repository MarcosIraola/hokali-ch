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
    const [exam, setExam] = useState(undefined);
    const [showModal, setShowModal] = useState(false)
    const [showScore, setShowScore] = useState()

    // El header x-status-code acepta los valores de 200, 400 y 500.
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
                if (!payload.status) {
                    setExam(payload);
                }
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    // TAMBIEN SE PUEDE FILTRAR DE LOS EXAMENES TRAIDOS DEL STORE, (YA QUE EL MOCKUP /params/:id TRAE SIEMPRE LA MISMA RESPUESTA)
    // useEffect(() => {
    //     exams.exams.filter((exam) => {
    //         if(exam.id == params.id) {
    //             setExam(exam)
    //         }
    //     })
    // }, [isFetching])

    const saveExam = () => {
        const url = `http://127.0.0.1:5432/exams/${params.id}`;
        const options = {
            method: 'PUT',
            headers: {
                "Content-type": "application/json",
                "x-status-code": "200"
            },
            body: {
                ...exam,
                completed: true
            }
        };
        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                setShowScore(data.response.score)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className={styles.container}>

            <Modal showModal={showModal} mainFunction={saveExam} cancelClick={() => setShowModal(false)}/>
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
                {
                    exam == undefined ?
                    <div className={styles.error_container}>
                        <p>Hubo un error. Vuelva a intentarlo.</p>
                        <div className={styles.button_container}>
                            <TButton title='Go Back' function_1={() => navigate(-1)}/>
                        </div>
                    </div>
                    :
                    <div className={styles.button_container}>
                        <TButton title='Submit' function_1={() => setShowModal(true)}/>
                    </div>
                }
            </div>
        </div>
    )
}

export default ExamView