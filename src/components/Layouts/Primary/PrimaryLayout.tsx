import Head from 'next/head';
import styles from './PrimaryLayout.module.scss';
export interface IPrimaryLayout { }

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
    return (
        <>
            <Head>
                <title>Tai Bui</title>
            </Head>

            <main className={styles.main}>{children}</main>
        </>
    );
};

export default PrimaryLayout;