import React, { useState } from 'react'
import styles from './Start.module.css'
import TButton from '../../components/ui/Button/TButton'

const Start = () => {

    const [name, setName] = useState('')

    return (
        <div className={styles.container}>
            <p className={styles.title}>Please write your name</p>
            <input 
                className={styles.input} 
                type="text" 
                placeholder='Your name' 
                onInput={e => setName(e.target.value)}
            />
            <div className={styles.button}>
                <TButton title='Continue' function_1={() => console.log(name)} disabled={!name}/>
            </div>
        </div>
    )
}

export default Start