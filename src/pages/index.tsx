import { GetStaticProps } from 'next';

import { FiCalendar, FiUser } from 'react-icons/fi';
import Prismic from '@prismicio/client';
import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';

import styles from './home.module.scss';

import { Header } from '../components/Header/index';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}
interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home(): JSX.Element {
  return (
    <>
      <Header />

      <div className={styles.container}>
        <div className={styles.content}>
          <a href="/post/1">
            <h1>Como utilizar os hooks</h1>
          </a>
          <p>Pensando em sincronização em vez de ciclos de vida.</p>
          <div>
            <FiCalendar />
            <span>15 Mar 2021</span>

            <FiUser />
            <span>Danilo vieira</span>
          </div>
        </div>

        <div className={styles.content}>
          <a href="/post/2">
            <h1>Como utilizar os hooks</h1>
          </a>
          <p>Pensando em sincronização em vez de ciclos de vida.</p>
          <div>
            <FiCalendar />
            <span>ola mundo</span>

            <FiUser />
            <span>Danilo vieira</span>
          </div>
        </div>

        <div className={styles.content}>
          <a href="/post/3">
            <h1>Como utilizar os hooks</h1>
          </a>
          <p>Pensando em sincronização em vez de ciclos de vida.</p>
          <div>
            <FiCalendar />
            <span>ola mundo</span>

            <FiUser />
            <span>Danilo vieira</span>
          </div>
        </div>

        <div className={styles.morePosts}>
          <span>Carregar mais posts</span>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const postsResponse = await prismic.query(
    [Prismic.predicates.at('document.type', 'post')],
    {
      fetch: ['publication.title', 'post.content'],
      pageSize: 20,
    }
  );
  console.log(JSON.stringify(postsResponse, null, 2));
  return {
    props: {},
  };
};
