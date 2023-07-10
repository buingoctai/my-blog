import React from "react";
import styles from './code.module.scss';

interface ICodeProps {
    block: any;
}


const CodeBlock: React.FC<ICodeProps> = (props) => {
    const ListRichCode = props.block?.code?.rich_text ? props.block?.code?.rich_text : [];

    return ListRichCode.map((t, idx) => (
        <pre key={idx} className={styles.code__block}>{t.plain_text || t.text?.content} </pre>
    ));
}

export default React.memo(CodeBlock);