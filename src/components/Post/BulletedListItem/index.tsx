import React from "react";
import styles from './bulleted.module.scss';

interface IBulletedListItemProps {
    block: any;
}


const BulletedBlock: React.FC<IBulletedListItemProps> = (props) => {
    const list = props.block?.bulleted_list_item?.rich_text || []


    return <>
        {list.map((p, idx) => (
            <li key={idx} className={styles.bulleted__block}>{p?.plain_text || ""} </li>
        ))}
    </>
}

export default React.memo(BulletedBlock);