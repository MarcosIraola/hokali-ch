import React, { useState, useEffect } from 'react'
import styles from './Start.module.css'
import TButton from '../../components/ui/Button/TButton'
import ExamCard from '../../components/ExamsCard/ExamCard'
import { ExpandAltOutlined } from '@ant-design/icons'

const Start = () => {

    const [search, setSearch] = useState('')
    const [exams, setExams] = useState([]);
    const [filteredExams, setFilteredExams] = useState([])

    useEffect(() => {
        const url = 'http://127.0.0.1:5432/exams';
        const options = {
            method: 'GET',
            headers: {"Content-type": "application/json"},
        };
        fetch(url, options)
            .then(response => response.json())
            .then(payload => {
                setExams(payload.exams);
            })
            .catch(error => {
                console.log(error)
            })

    }, []);

    useEffect(() => {
        
    }, [search])

    return (
        <div className={styles.container}>
            <h1>Welcome!</h1>
            <div className={styles.completed_container}>
                <h2 className={styles.title}>Completed Exams</h2>
                <ExamCard title='Math' description='Lorem impsum titus a griad du bere th december!' completed/>
            </div>
            <div className={styles.incompleted_container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Exams to complete</h2>
                    <input 
                        className={styles.input} 
                        type="text" 
                        placeholder='&#xF002; Search..' 
                        onInput={e => setSearch(e.target.value)}
                    />
                </div>
                {
                    exams?.map((exam, index) => (
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