import React from "react";
import styles from './paragraph.module.scss';

interface IParagraphProps {
    block: any;
}


const ParagraphBlock: React.FC<IParagraphProps> = (props) => {
    const ListRichText = props.block?.paragraph?.rich_text ? props.block?.paragraph?.rich_text : [];
    const ListRawText = props.block?.paragraph?.text ? props.block?.paragraph?.text : []
    const ListText = ListRichText || ListRawText;

    return ListText.map((t, idx) => (
        <p key={idx} className={styles.paragraph__block}>{t.plain_text || t.text?.content} </p>
    ));
}

export default React.memo(ParagraphBlock);