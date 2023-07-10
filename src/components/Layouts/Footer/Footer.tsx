
import { Layout } from 'antd';
import React from 'react';

const { Footer } = Layout;

interface IFooterWrapper {

}
const FooterWrapper: React.FC<IFooterWrapper> = () => {
    return (
        <Footer style={{ position: "fixed", bottom: '0px', width: "100%" }}>
            Blog ©2023 Created by Tai Bui
        </Footer>

    )
}

export default FooterWrapper;

