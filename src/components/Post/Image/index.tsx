import Image from "next/image";
import React from "react";
import styles from './image.module.scss';

interface IImageProps {
    block: any;
}

const WIDTH = 650;
const HEIGHT = 400;

const ImageBlock: React.FC<IImageProps> = (props) => {
    const src = props.block.image?.file?.url;

    return src ? (
        <Image
            className={styles.image__block}
            alt="photo"
            src={src}
            width={WIDTH}
            height={HEIGHT}
        />
    ) : null;
}

export default React.memo(ImageBlock);