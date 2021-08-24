import { GetStaticProps } from 'next';

import { FiCalendar, FiUser } from 'react-icons/fi';
import Prismic from '@prismicio/client';

import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { getPrismicClient } from '../services/prismic';
import { Header } from '../components/Header/index';

import commonStyles from '../styles/common.module.scss';

import styles from './home.module.scss';

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

export default function Home({ postsPagination }: HomeProps): JSX.Element {
  const { next_page, results } = postsPagination;

  const [nextPage, setNextPage] = useState(next_page);
  const [posts, setPosts] = useState<Post[]>(results);

  const handleMorePosts = async (): Promise<void> => {
    const postsResponse = await fetch(`${next_page}`).then(data => data.json());

    const newPost = postsResponse.results.map(post => {
      return {
        uid: post.uid,
        first_publication_date: format(
          new Date(post.first_publication_date),
          'MM/dd/yyyy',
          {
            locale: ptBR,
          }
        ),
        data: {
          title: post.data.title,
          subtitle: post.data.subtitle,
          author: post.data.author,
        },
      };
    });

    setPosts([...posts, ...newPost]);
  };

  return (
    <>
      <Header />

      <div className={styles.container}>
        {posts.map(post => (
          <div className={styles.content} key={post.uid}>
            <a href="/post/1">
              <h1>{post.data.title}</h1>
            </a>
            <p>{post.data.subtitle}</p>
            <div>
              <FiCalendar />
              <span>{post.first_publication_date}</span>

              <FiUser />
              <span>{post.data.author}</span>
            </div>
          </div>
        ))}

        {nextPage && (
          <div className={styles.morePosts}>
            <button type="button" onClick={handleMorePosts}>
              Carregar mais posts
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const postsResponse = await prismic.query(
    [Prismic.predicates.at('document.type', 'post')],
    {
      fetch: ['post'],
      pageSize: 1,
    }
  );

  const { next_page } = postsResponse;
  const results = postsResponse.results.map(post => {
    return {
      uid: post.uid,
      first_publication_date: format(
        new Date(post.first_publication_date),
        'MM/dd/yyyy',
        {
          locale: ptBR,
        }
      ),
      data: {
        title: post.data.title,
        subtitle: post.data.subtitle,
        author: post.data.author,
      },
    };
  });

  const postsPagination = {
    results,
    next_page,
  };

  // console.log(JSON.stringify(postsResponse, null, 2));
  return {
    props: { postsPagination },
  };
};
