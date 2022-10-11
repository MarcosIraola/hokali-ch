import React, { useState } from 'react'
import styles from './Start.module.css'
import TButton from '../../components/ui/Button/TButton'
import ExamCard from '../../components/ExamsCard/ExamCard'

const Start = () => {

    const [name, setName] = useState('')

    return (
        <div className={styles.container}>
            {/* <p className={styles.title}>Please write your name</p>
            <input 
                className={styles.input} 
                type="text" 
                placeholder='Your name' 
                onInput={e => setName(e.target.value)}
            />
            <div className={styles.button}>
                <TButton title='Continue' function_1={() => console.log(name)} disabled={!name}/>
            </div> */}
            <h1>Welcome, `user`</h1>
            <div className={styles.completed_container}>
                <h2 className={styles.title}>Completed Exams</h2>
                <span>You have 0 exams completed.</span>
                <ExamCard title='Math' description='Lorem impsum titus a griad du bere th december!' completed/>
            </div>
            <div className={styles.incompleted_container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Exams to complete</h2>
                    <input 
                        className={styles.input} 
                        type="text" 
                        placeholder='&#xF002; Search..' 
                        onInput={e => setName(e.target.value)}
                    />
                </div>
                <ExamCard title='Math' description='Lorem impsum titus a griad du bere th december!' id='1'/>
                <ExamCard title='Math' description='Lorem impsum titus a griad du bere th december!' id='2'/>
                <ExamCard title='Math' description='Lorem impsum titus a griad du bere th december!' id='3'/>
            </div>

        </div>
    )
}

export default Start