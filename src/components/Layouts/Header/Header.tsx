
import { Layout } from 'antd';
import React from 'react';
import styles from './Header.module.scss';
import NavBar from './NavBar';
const { Header } = Layout;

interface IHeader {

}
const HeaderWrapper: React.FC<IHeader> = () => {
    return (
        <Header className={styles.container}>
            <span className={styles.brand__name}>Tài Bùi</span>
            <NavBar />
        </Header>
    )
}

export default HeaderWrapper;

