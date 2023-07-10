import useRenderTechnicalPosts from 'hooks/use-render-technical-posts';
import { ArticleNotionAPI } from 'libs/api';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Content from '@/components/Layouts/Content/Content';
import Footer from '@/components/Layouts/Footer/Footer';
import Header from '@/components/Layouts/Header/Header';
import { selectArticleList, setArticleList } from '@/store/slices/article-list-slice';
import CatCard, { ICatCard } from 'components/Cards/Cat/CatCard';
import PrimaryLayout from 'components/Layouts/primary/PrimaryLayout';
import styles from 'styles/Home.module.css';
import { container } from 'tsyringe';
import { NextPageWithLayout } from './page';
interface IHomeProps {
  posts: any[],
  hasMore: boolean,
  nextCursor: string,
}

const Home: NextPageWithLayout = (props: IHomeProps) => {
  const { posts } = useRenderTechnicalPosts(
    props.posts,
  );

  const list = useSelector(selectArticleList);
  const dispatch = useDispatch();
  console.log("taibnlogs list", list);

  useEffect(() => {
    dispatch(setArticleList(["name"]));
  }, []);

  return (
    <section className={styles.grid}>
      {posts.map((post: ICatCard) => {
        return (
          <CatCard
            id={post.id}
            key={post.id}
            tags={post.tags}
            title={post.title}
            Content={post.Content}
            author={post.author}
            time={post.time}
            authorPhoto={post.authorPhoto}
            thumb={post.thumb}
          />
        );
      })}
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <Header />
      {/* <Sidebar onSearchPosts={() => { }} /> */}
      <Content>
        <div>Content</div>
      </Content>
      {/* {page} */}
      <Footer />
    </PrimaryLayout>
  );
};

export async function getServerSideProps() {
  const response = await container.resolve(ArticleNotionAPI).getArticles();

  return {
    props: {
      posts: response.results,
      hasMore: response.has_more,
      nextCursor: response.next_cursor,
    }
  }
}