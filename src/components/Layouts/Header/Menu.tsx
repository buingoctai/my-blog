
import IconMoonLight from '@/assets/icon-moon-light.svg';
import IconSunLight from '@/assets/icon-sun-light.svg';
import { MenuOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Image from 'next/image';
import React from 'react';
import styles from './Header.module.scss';

interface IHeader {
    mode?: 'horizontal' | 'inline',
    onOpenMenu?: () => void;
}
const HeaderWrapper: React.FC<IHeader> = (props) => {
    return (
        <Menu
            mode={props.mode || 'horizontal'}
            className={styles.menu}
            overflowedIndicator={<MenuOutlined rev={undefined} onClick={props.onOpenMenu} />}
            triggerSubMenuAction='click'
            style={props.mode === 'inline' ? { borderInlineEnd: "none" } : {}}
        >
            <Menu.Item key="saved">Saved</Menu.Item>
            <Menu.Item key="features">Projects</Menu.Item>
            <Menu.Item key="about">About Us</Menu.Item>
            <Menu.Item key="contact">Contact Us</Menu.Item>
            <Menu.Item key="themeMode" className={styles['menu-item']}>
                <div className={styles['menu-item-content']}>
                    <div className={styles['menu-item-wrapper']}>
                        <Image src={IconSunLight} alt={''} />
                        <Image src={IconMoonLight} alt={''} />
                    </div>
                </div>
            </Menu.Item>
        </Menu>
    )
}

export default HeaderWrapper;

