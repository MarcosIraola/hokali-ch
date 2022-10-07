import React from 'react'
import styles from './TButton.module.css'

const TButton = (props) => {

    const {title, function_1} = props;

    return (
        <div className={styles.container} onClick={function_1}>
            <p className={styles.text}>{title}</p>
        </div>
    )
}

export default TButton