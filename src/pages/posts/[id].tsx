import BulletedBlock from 'components/Post/BulletedListItem';
import CodeBlock from 'components/Post/Code';
import DividerBlock from 'components/Post/Divider';
import Heading2Block from 'components/Post/Heading2';
import Heading3Block from 'components/Post/Heading3';
import ImageBlock from 'components/Post/Image';
import NumberBlock from 'components/Post/NumberListItem';
import ParagraphBlock from 'components/Post/Paragraph';
import TodoBlock from 'components/Post/Todo';
import { ArticleNotionAPI } from 'libs/api';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import { container } from 'tsyringe';
import { BLOCK_TYPES_SUPPORT } from 'utils/constants';
import styles from './post.module.scss';


interface IParams extends ParsedUrlQuery {
    id: string
}

interface Props {
    id: string,
    post: any,
    blocks: [any]
}

const renderBlock = (block: any, index: number) => {
    switch (block.type) {
        case BLOCK_TYPES_SUPPORT.Image:
            return <ImageBlock block={block} />;
        case BLOCK_TYPES_SUPPORT.Paragraph:
            return <ParagraphBlock block={block} />;
        case BLOCK_TYPES_SUPPORT.BulletedListItem:
            return <BulletedBlock block={block} />;
        case BLOCK_TYPES_SUPPORT.NumberedListItem:
            return <NumberBlock block={block} />;
        case BLOCK_TYPES_SUPPORT.Divider:
            return <DividerBlock block={block} />;
        case BLOCK_TYPES_SUPPORT.Code:
            return <CodeBlock block={block} />;
        case BLOCK_TYPES_SUPPORT.HEADING_3:
            return <Heading3Block block={block} />;
        case BLOCK_TYPES_SUPPORT.HEADING_2:
            return <Heading2Block block={block} />;
        case BLOCK_TYPES_SUPPORT.Todo:
            return <TodoBlock block={block} />;
        default:
            return <p style={{ color: "red" }}>{`Undefined type  ${block.type} with index ${index}`}</p>
    }
}

const Post: NextPage<Props> = ({ id, post, blocks }) => {
    return (
        <div className={styles.blogPageHolder}>
            <Head>
                <title>
                    {post.properties.Name.title[0].plain_text}
                </title>
            </Head>
            <div className={styles.blogPageNav}>
                <nav>
                    <button className={styles.button__back}><Link href="/">Trang chủ</Link></button>
                </nav>
            </div>
            {
                blocks.map((block, index) => {
                    return (
                        <div key={index} className={styles.blogPageContent}>
                            {
                                renderBlock(block, index)
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { id } = ctx.params as IParams;

    const post = await container.resolve(ArticleNotionAPI).getDetailArticle(id);
    let { results: blocks } = await container.resolve(ArticleNotionAPI).getArticleBlocks(id);

    return {
        props: {
            id,
            post,
            blocks
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { results: posts } = await container.resolve(ArticleNotionAPI).getArticles();

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    id: post.id
                }
            }
        }),
        fallback: false
    }
}


export default Post;