import Image from 'next/image';
import Link from 'next/link';
import Utils from 'utils/utils';
import styles from './CatCard.module.scss';

export interface ICatCard {
    id: string;
    title: string;
    tags: { name: string, color: string }[];
    body: string;
    author: string;
    authorPhoto: string;
    time: string;
    thumb: string;
}

const CatCard: React.FC<ICatCard> = ({ id, tags, title, body, author, time, authorPhoto, thumb }) => {
    return (
        <Link href={{
            pathname: `posts/${id}`,

        }}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.card__header}>
                        <Image
                            src={thumb}
                            alt="card__image"
                            className={styles.card__image}
                            width="600"
                            height="300"
                            priority
                        />
                    </div>
                    <div className={styles.card__body}>
                        {tags && tags.map((tag) => (
                            <span key={tag.name} style={{ background: `${tag.color}` }} className={styles.tag}>{tag.name}</span>
                        ))}

                        <h4 title={title} className={`truncate-two-line ${styles.title__blog}`}>{title}</h4>
                        {body && <p>{body}</p>}
                    </div>
                    <div className={styles.card__footer}>
                        <div className={styles.user}>
                            <Image
                                src={authorPhoto}
                                alt="user__image"
                                className={styles.user__image}
                                width="40"
                                height="40"
                            />
                            <div className={styles.user__info}>
                                <h5>{author}</h5>
                                <small>{Utils.convertToGeneralFormatTime(time)}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default CatCard;