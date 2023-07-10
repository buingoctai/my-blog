
import { Layout } from 'antd';
import React from 'react';

const { Content } = Layout;
interface IContentWrapper {
    children: React.ReactElement,
}
const ContentWrapper: React.FC<IContentWrapper> = (props) => {
    return (
        <Content>
            {props.children}
        </Content>
    )
}

export default ContentWrapper;

