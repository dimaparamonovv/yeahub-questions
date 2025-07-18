import styles from "./Header.module.css";

import logoUrl from "@/shared/assets/logo.svg";

export const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <div className={styles.leftBlock}>
        <a href="/" className={styles.logoLink}>
          <img src={logoUrl} className={styles.logoIcon} alt="Yeahhub logo" />
        </a>

        <nav className={styles.nav} aria-label="Главная навигация">
          <ul className={styles.navList}>
            <li>
              <a className={styles.navLink} href="#">
                База вопросов
              </a>
            </li>

            <li>
              <a className={styles.navLink} href="#">
                Тренажер
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.authBlock}>
        <a className={styles.login} href="#">
          Вход
        </a>

        <button className={styles.register}>Регистрация</button>
      </div>
    </div>
  </header>
);
