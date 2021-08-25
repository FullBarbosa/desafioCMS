import { GetStaticPaths, GetStaticProps } from 'next';
import { FiCalendar, FiUser, FiClock } from 'react-icons/fi';

import Link from 'next/link';
import { getPrismicClient } from '../../services/prismic';
import styles from './post.module.scss';
import Header from '../../components/Header/index';
import commonStyles from '../../styles/common.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps): JSX.Element {
  // TODO
  return (
    <>
      <header className={commonStyles.container}>
        <Header />
      </header>
      <img src="Banner.png" alt="imagem" className={styles.banner} />
      <main className={commonStyles.container}>
        <div className={styles.post}>
          <div className={styles.postTop}>
            <h1>Algum titulo</h1>
            <ul>
              <li>
                <FiCalendar />
                25 ago 2021
              </li>
              <li>
                <FiUser />
                João gomes
              </li>
              <li>
                <FiClock />5 min
              </li>
            </ul>
          </div>

          <article>
            <h2>Qualquer titulo</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              expedita amet ipsum laboriosam aliquam eius saepe est repudiandae
              quaerat, reprehenderit nisi praesentium unde autem labore qui nam
              minus temporibus nostrum!
            </p>
          </article>
        </div>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // const prismic = getPrismicClient();
  // const posts = await prismic.query(TODO);

  return {
    paths: [],
    fallback: true,
  };
  // TODO
};

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   const posts = await prismic.query(TODO);

//   // TODO
// };

// export const getStaticProps = async context => {
//   const prismic = getPrismicClient();
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
