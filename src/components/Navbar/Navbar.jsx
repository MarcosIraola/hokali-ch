import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import 'antd/dist/antd.css';
import { useTranslation } from 'react-i18next';
import { HOME, START } from '../../routes/routes';

const Navbar = () => {

    const { t, i18n } = useTranslation();

    const menu = (
        <Menu
            items={[
                {
                    label: 'English',
                    key: '0',
                    onClick: () => i18n.changeLanguage('en')
                },
                {
                    label: 'Español',
                    key: '1',
                    onClick: () => i18n.changeLanguage('es')
                }
            ]}
        />
    );


    return (
        <div className={styles.container}>
            <div className={styles.logo_container}>
                <Link to={HOME}>
                    <img className={styles.logo} src={require('../../assets/logo.png')}/>
                </Link>
            </div>
            <div className={styles.menu_container}>
                <ul>
                    <li className={styles.link}>
                        <Link to={HOME}>
                            { t('navbar.home') }
                        </Link>
                    </li>
                    <li className={styles.link}>
                        <Link to={START}>
                            { t('navbar.start') }
                        </Link>
                    </li>
                    <li className={styles.link}>
                        <Link to={START}>
                            { t('navbar.FAQ') }
                        </Link>
                    </li>
                    <li className={styles.link}> | </li>
                    <li className={styles.language}>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <a onClick={e => e.preventDefault()}>
                                <Space>
                                    { t('navbar.language') }<DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                    </li>
                </ul>
                
            </div>
        </div>
    )
}

export default Navbar