import React, { useState, useEffect } from 'react'
import styles from './Start.module.css'
import TButton from '../../components/ui/Button/TButton'
import ExamCard from '../../components/ExamsCard/ExamCard'
import { useGetExamsQuery } from '../../redux/examsApi';
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';

const Start = () => {

    const { data: exams, isFetching } = useGetExamsQuery();

    const [completedExams, setCompletedExams] = useState([])
    const [incompletedExams, setIncompletedExams] = useState([])

    const [search, setSearch] = useState('')
    const [filteredExams, setFilteredExams] = useState([])

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
        // setFilteredExams(incompleted)

    }, [isFetching]);

    // useEffect(() => {
    //     const newVal = incompletedExams.filter((exam) => {
    //         if (search === '') {
    //             return exam;
    //         } else {
    //             return exam.title.toLowerCase().includes(search)
    //         }
    //     })

    //     if(search.length > 0) {
    //         setFilteredExams(newVal)
    //     } else {
    //         setFilteredExams(incompletedExams)
    //     }
    // }, [search])

    return (
        <div className={styles.container}>
            <h1>Welcome!</h1>
            <div className={styles.completed_container}>
                <div>
                    <h2 className={styles.title}>Completed Exams</h2>
                </div>
                {
                    completedExams?.length < 1
                    ?
                    <span>You have 0 exams completed.</span>
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
                    <h2 className={styles.title}>Exams to complete</h2>
                    <input 
                        className={styles.input} 
                        type="text" 
                        placeholder='Search..' 
                        onInput={e => setSearch(e.target.value)}
                    />
                </div>
                {
                    incompletedExams?.length < 1 
                    ? 
                    <span>No exams found.</span>
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