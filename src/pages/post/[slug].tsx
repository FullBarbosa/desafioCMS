import { GetStaticPaths, GetStaticProps } from 'next';
import { FiCalendar, FiUser, FiClock } from 'react-icons/fi';

import { getPrismicClient } from '../../services/prismic';
import styles from './post.module.scss';
import { Header } from '../../components/Header/index';

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

export default function Post(): JSX.Element {
  // TODO
  return (
    <>
      <Header />

      <div className={styles.banner}>
        <img src="../images/Banner.png" alt="bannerImage" />
      </div>

      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Como utilizar os hooks</h1>

          <div className={styles.info}>
            <FiCalendar />
            <span>15 Mar 2021</span>

            <FiUser />
            <span>Danilo vieira</span>

            <FiClock />
            <span>4 min</span>
          </div>
        </div>

        <div className={styles.subtitle}>
          <h1>Proin et varius</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            eveniet ab, ea voluptatum amet itaque eum facilis? Ut repellendus
            quibusdam harum nostrum accusantium tempora optio fugit debitis
            distinctio maiores? Tenetur.
          </p>
        </div>

        <div className={styles.body}>
          <h1>Cras laoreet mi</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            quam, iusto quo natus iste obcaecati harum quis quae possimus
            molestiae maxime optio consectetur quas molestias eum atque ad vero.{' '}
            <strong>Labore</strong> . Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Consequatur voluptatum facilis iure labore
            necessitatibus impedit possimus quia rem, accusamus quidem veniam,
            architecto dolore eligendi quisquam fuga quo sunt{' '}
            <a href="#">aut neque!</a>
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
            tenetur est, nobis voluptatum ipsa, perspiciatis beatae dolores
            earum consectetur suscipit blanditiis eveniet similique distinctio,
            voluptatem ratione qui natus reiciendis amet.
          </p>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
            nobis impedit provident numquam, vitae sed nemo voluptatibus est
            deleniti inventore nesciunt voluptates unde dolores sint nam, quasi
            atque eum? Officiis!
          </p>

          <ul>
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis architecto voluptate earum. Adipisci accusamus aut
                repudiandae, error cumque dolores tempore et reiciendis odio
                sint temporibus placeat ea, fuga dolor nulla.
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
                corporis quas eveniet dolores eaque distinctio officia illo
                saepe, mollitia nemo asperiores recusandae repellendus quaerat
                consequatur perferendis rerum consectetur sint qui.
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis perspiciatis reprehenderit obcaecati cum dolorum iste,
                officia quo voluptate est maxime labore inventore explicabo
                quidem eligendi nihil, sint quia voluptatibus autem!
              </p>
            </li>
          </ul>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            facilis, nobis explicabo ullam vel cumque ipsam consequuntur minus
            blanditiis quae ut harum libero sint laudantium fugiat impedit,
            aperiam sequi quia. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Repudiandae provident dolore et, ab libero quam
            maxime obcaecati! Quaerat odit voluptatibus similique delectus nobis
            quas possimus. Aperiam necessitatibus quo dolore perspiciatis.
          </p>

          <p>Qualque texto para colcoar nome do autor</p>
        </div>
        <div />
      </div>
    </>
  );
}

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
