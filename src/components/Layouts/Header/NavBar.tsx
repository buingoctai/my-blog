
import { CloseOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import React, { useState } from 'react';
import styles from './Header.module.scss';
import Menu from './Menu';

interface IHeader {

}
const NavBar: React.FC<IHeader> = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    console.log("taibnlogs styles", styles)
    return (
        <div className={styles['menu-wrapper']}>
            {!isOpenMenu && <Menu key='menu-horizontal' onOpenMenu={() => setIsOpenMenu(true)} />}
            <Drawer
                closable={false}
                placement="right"
                footer={
                    <div style={{ textAlign: "center" }}>
                        <CloseOutlined rev={undefined} onClick={() => setIsOpenMenu(false)} />
                    </div>
                }
                open={isOpenMenu}
                className={styles.drawer}
                width={'100%'}
            >
                <Menu key='menu-inline' mode='inline' />
            </Drawer>
        </div>
    )
}

export default NavBar;

