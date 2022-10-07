import React from 'react'
import styles from './TButton.module.css'

const TButton = (props) => {

    const {title, function_1, disabled} = props;

    console.log(disabled)

    return (
        <div className={disabled ? styles.disabled : styles.container} onClick={!disabled ? function_1 : undefined}>
            <p className={styles.text}>{title}</p>
        </div>
    )
}

export default TButton