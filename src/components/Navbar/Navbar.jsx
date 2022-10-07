import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import 'antd/dist/antd.css';

const Navbar = () => {

    const menu = (
        <Menu
            items={[
                {
                    label: 'English',
                    key: '0',
                    onClick: () => console.log('english')
                },
                {
                    label: 'Spanish',
                    key: '1',
                    onClick: () => console.log('spanish')
                }
            ]}
        />
    );


    return (
        <div className={styles.container}>
            <div className={styles.logo_container}>
                <Link to='/'>
                    <img className={styles.logo} src={require('../../assets/logo.png')}/>
                </Link>
            </div>
            <div className={styles.menu_container}>
                <ul>
                    <li className={styles.link}>
                        <Link to='/start'>
                            Start
                        </Link>
                    </li>
                    <li className={styles.link}>
                        <Link to='/start'>
                            Docs
                        </Link>
                    </li>
                    <li className={styles.link}> | </li>
                    <li className={styles.language}>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <a onClick={e => e.preventDefault()}>
                                <Space>
                                    Language<DownOutlined />
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