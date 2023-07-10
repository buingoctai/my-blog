import { ComponentMeta, ComponentStory } from '@storybook/react';
import Sidebar, { ISidebarLayout } from './Sidebar';
import { mockSidebarLayoutProps } from './Sidebar.mocks';

export default {
    title: 'templates/Sidebar',
    component: Sidebar,
    argTypes: {},
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (argv) => (
    <Sidebar {...argv} />
);


export const Base = Template.bind({});

Base.args = {
    ...mockSidebarLayoutProps.base,
} as ISidebarLayout;
