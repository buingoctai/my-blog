import React from "react";
import styles from './divider.module.scss';

interface IImageProps {
    block: any;
}


const DividerBlock: React.FC<IImageProps> = (props) => {
    return (<div className={styles.divider__block}></div>);

}

export default React.memo(DividerBlock);