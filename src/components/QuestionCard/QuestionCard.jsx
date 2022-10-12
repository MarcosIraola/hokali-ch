import React, { useState } from 'react'
import styles from './QuestionCard.module.css'
import { Input, Radio, Space } from 'antd';
import 'antd/dist/antd.css';

const QuestionCard = (props) => {

    const { question } = props;
    const [chosenAnswer, setChosenAnswer] = useState()

    const [trueOption, setTrueOption] = useState(false);
    const [falseOption, setFalseOption] = useState(false);

    const setTrueOrFalse = (props) => {
        if (props === "true") {
            setTrueOption(true)
            setFalseOption(false)
            setChosenAnswer(1)
        }
        if(props === "false") {
            setFalseOption(true)
            setTrueOption(false)
            setChosenAnswer(2)
        }
    }

    const onChangeMultiplechoice = (e) => {
        setChosenAnswer(e.target.value);
    };

    const onChangeTextAnswer = (e) => {
        setChosenAnswer(e.target.value)
    }

    console.log(chosenAnswer)

    const renderAnswer = () => {
        switch (question.type) {
            // CASE 1 == VERDADERO O FALSO
            case 1:
                return (
                    <div className={styles.trueOrFalse_container}>
                        <button
                            className={trueOption ? styles.tof_button_clicked : styles.tof_button}
                            onClick={() => setTrueOrFalse("true")}
                        >
                            {question.answers[0].text}
                        </button>
                        <button
                            className={falseOption ? styles.tof_button_clicked : styles.tof_button}
                            onClick={() => setTrueOrFalse("false")}
                        >
                            {question.answers[1].text}
                        </button>
                    </div>
                    )
            // CASE 2 == MULTIPLECHOICE
            case 2:
                return (
                    <div className={styles.radioButton_container}>
                        <Radio.Group onChange={onChangeMultiplechoice} value={chosenAnswer}>
                            <Space direction="vertical">
                                {
                                    question.answers.map((option, index) => (
                                        <Radio value={index}>{option.text}</Radio>
                                    ))
                                }
                            </Space>
                        </Radio.Group>
                    </div>
                )
            // CASE 3 == ANSWER
            case 3:
                return (
                    <div className={styles.textArea_container}>
                         <textarea className={styles.textarea} name="description" defaultValue={chosenAnswer} placeholder='Your answer here'  onChange={onChangeTextAnswer}/>
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