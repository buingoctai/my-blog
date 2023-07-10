import React from "react";
import styles from './todo.module.scss';

interface ITodoProps {
    block: any;
}


const TodoBlock: React.FC<ITodoProps> = (props) => {
    const ListRichCode = props.block?.to_do?.rich_text ? props.block?.to_do?.rich_text : [];

    return ListRichCode.map((t, idx) => (
        // eslint-disable-next-line react/jsx-key
        <div key={idx} className={styles.todo__block}>
            <input type="checkbox" />
            <label >{t.plain_text || t.text?.content}</label>
        </div>
    ));
}

export default React.memo(TodoBlock);