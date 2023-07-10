import Image from 'next/image';
import ContactMe from '../../public/contact-me.jpg';
import Sidebar from '../components/Layouts/Sidebar/Sidebar';
import PrimaryLayout from '../components/Layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Contact: NextPageWithLayout = () => {
    return (
        <section style={{ width: "100%", textAlign: "center" }}>
            <Image src={ContactMe} height={100} width={100} alt='me' style={{
                width: "auto",
                height: "auto",
                marginBottom: "12px",
            }} />
        </section>
    );
};

export default Contact;

Contact.getLayout = (page) => {
    return (
        <PrimaryLayout>
            <Sidebar />
            {page}
        </PrimaryLayout>
    );
};