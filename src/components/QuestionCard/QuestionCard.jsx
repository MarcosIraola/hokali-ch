import React from 'react'
import styles from './QuestionCard.module.css'

const QuestionCard = (props) => {

    const { question } = props;

    const renderAnswer = () => {
        switch (question.type) {
            case 1:
                return (
                    <div className={styles.TrueOrFalse_container}>
                        {
                            question.answers.map((option) => (
                                <p>{option.text}</p>
                            ))
                        }
                    </div>
                    )
            case 2:
                return (
                    <div className={styles.RadioButton_container}>
                        {
                            question.answers.map((option) => (
                                <p>{option.text}</p>
                            ))
                        }
                    </div>
                )
            case 3:
                return (
                    <div className={styles.TextArea_container}>
                         <textarea name="description" defaultValue="Your answer here.." />
                    </div>
                )
            default:
                break;
        }
    }


    return (
        <div className={styles.container}>
            <h1>{question.question}</h1>
            { renderAnswer() }
        </div>
    )
}

export default QuestionCard