import React from 'react'
import TButton from '../../components/ui/Button/TButton'
import styles from './Home.module.css'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const testMe = () => {
        navigate("/start");
    }

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <h2 className={styles.title}>{ t('home.title')}</h2>
                <p className={styles.text}>{ t('home.description')}</p>
                <TButton title={ t('home.button')} function_1={testMe}/>
            </div>
            <div className={styles.image}>
                <img src={require('../../assets/home.png')} />
            </div>
        </div>
    )
}

export default Home