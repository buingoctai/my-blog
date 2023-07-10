import Link from 'next/link';
import styles from './Sidebar.module.scss';

export interface ISidebarLayout {
    onSearchPosts: (text: string) => void;
}

const Sidebar: React.FC<ISidebarLayout> = (props) => {
    const { onSearchPosts = () => { } } = props;


    return (
        <nav className={styles.nav}>
            <input className={styles.input} placeholder="Search..." onChange={(e) => onSearchPosts(e.target.value)} />
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>

            <Link href={"/contact"}>Contact</Link>
        </nav>
    );
};

export default Sidebar;