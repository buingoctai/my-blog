import Image from 'next/image';
import Author from '../../public/Author.jpg';
import Sidebar from '../components/Layouts/Sidebar/Sidebar';
import PrimaryLayout from '../components/Layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const About: NextPageWithLayout = () => {
    return (
        <section style={{ width: "50%" }}>
            <Image src={Author} height={100} width={100} alt="Me" style={{
                width: "auto",
                height: "auto",
                marginBottom: "12px",
                borderRadius: "6px",
            }} />
            <h1 style={{
                margin: "8px 0px"
            }}>{`What is the blog's values?`}</h1>
            <p style={{
                fontSize: "x-Large",
                fontStyle: "italic"
            }}>
                I am a software engineer. In software development, we use technologies
                as tools for resolving issues that end users are experiencing.
                We want to leverage technology to provide the most value to users.
                So, it is the main reason that gives me more motivation to build this blog.
                I would like to share knowledge about related technologies and others through it.
            </p>
        </section>
    );
};

export default About;

About.getLayout = (page) => {
    return (
        <PrimaryLayout>
            <Sidebar />
            {page}
        </PrimaryLayout>
    );
};