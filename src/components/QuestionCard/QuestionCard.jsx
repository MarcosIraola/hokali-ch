import React from 'react'
import styles from './QuestionCard.module.css'

const QuestionCard = (props) => {

    const { question } = props;

    const renderAnswer = () => {
        switch (question.type) {
            // CASE 1 == VERDADERO O FALSO
            case 1:
                return (
                    <div className={styles.trueOrFalse_container}>
                        {
                            question.answers.map((option, index) => (
                                <button key={index} className={styles.tof_button}>{option.text}</button>
                            ))
                        }
                    </div>
                    )
            // CASE 2 == MULTIPLECHOICE
            case 2:
                return (
                    <div className={styles.radioButton_container}>
                        {
                            question.answers.map((option, index) => (
                                <p key={index}>{option.text}</p>
                            ))
                        }
                    </div>
                )
            // CASE 3 == ANSWER
            case 3:
                return (
                    <div className={styles.textArea_container}>
                         <textarea name="description" defaultValue="Your answer here.." />
                    </div>
                )
            default:
                break;
        }
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{question.question}</h1>
            { renderAnswer() }
        </div>
    )
}

export default QuestionCard