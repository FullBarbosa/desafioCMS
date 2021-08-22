import styles from './header.module.scss';

export function Header(): JSX.Element {
  return (
    <nav className={styles.headerContainer}>
      <a href="/">
        <img src="../images/Logo.svg" alt="Logo" />
      </a>
    </nav>
  );
}
