import React from 'react';
import styles from '../styles/header.module.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';  // Import React Scroll
import i18n from '../i18n';  // Import i18n

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Tib_Kut</div>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link to="aboutMe" smooth={true} duration={500}>
              {t('aboutMe')}
            </Link>
          </li>
          <li>
            <Link to="mySkills" smooth={true} duration={500}>
              {t('mySkills')}
            </Link>
          </li>
          <li>
            <Link to="myProjects" smooth={true} duration={500}>
              {t('myProjects')}
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              {t('contact')}
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.languageSwitcher}>
        <button onClick={() => i18n.changeLanguage('en')}>EN</button>
        <button onClick={() => i18n.changeLanguage('sk')}>SK</button>
      </div>
    </header>
  );
};

export default Header;
