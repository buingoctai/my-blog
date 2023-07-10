import React from "react";
import styles from './number.module.scss';

interface INumberListItemProps {
    block: any;
}


const NumberBlock: React.FC<INumberListItemProps> = (props) => {
    const list = props.block?.bulleted_list_item?.rich_text || []


    return <>
        {list.map((p, idx) => (
            <p key={idx} className={styles.numbered__block}>{p?.plain_text || ""} </p>
        ))}
    </>
}

export default React.memo(NumberBlock);