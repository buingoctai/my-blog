import React from "react";
import styles from './heading2.module.scss';

interface IHeading2Props {
    block: any;
}


const Heading2Block: React.FC<IHeading2Props> = (props) => {
    const ListHeading2Code = props.block?.heading_2?.rich_text ? props.block?.heading_2?.rich_text : [];

    return ListHeading2Code.map((t, idx) => (
        <h2 key={idx} className={styles.heading2__block}>{t.plain_text || t.text?.content} </h2>
    ));
}

export default React.memo(Heading2Block);