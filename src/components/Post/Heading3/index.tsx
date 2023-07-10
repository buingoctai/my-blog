import React from "react";
import styles from './heading3.module.scss';

interface IHeading3Props {
    block: any;
}


const Heading3Block: React.FC<IHeading3Props> = (props) => {
    const ListHeading3Code = props.block?.heading_3?.rich_text ? props.block?.heading_3?.rich_text : [];

    return ListHeading3Code.map((t, idx) => (
        <h3 key={idx} className={styles.heading3__block}>{t.plain_text || t.text?.content} </h3>
    ));
}

export default React.memo(Heading3Block);