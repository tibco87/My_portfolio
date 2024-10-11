import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/header.module.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';  // Import React Scroll
import i18n from '../i18n';  // Import i18n
import logo from '../assets/icons/logo.png';  // Import the logo image

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const navListRef = useRef<HTMLDivElement>(null);  // Ref na navList
  const mainContentRef = useRef<HTMLDivElement>(null);  // Ref na hlavný obsah

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Kliknutie mimo menu pre zatvorenie
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest(`.${styles.navList}`) && !target.closest(`.${styles.hamburger}`)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Efekt na nastavenie margin-top pre obsah podľa výšky menu
  useEffect(() => {
    if (isOpen && navListRef.current && mainContentRef.current) {
      const menuHeight = navListRef.current.clientHeight;  // Získame výšku menu
      mainContentRef.current.style.marginTop = `${menuHeight}px`;  // Nastavíme margin-top pre obsah
    } else if (mainContentRef.current) {
      mainContentRef.current.style.marginTop = `0px`;  // Pri zatvorení menu vynulujeme margin-top
    }
  }, [isOpen]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo T_K" className={styles.logoImage} />
        </div>

        {/* Klasické menu na počítači */}
        <nav className={`${styles.navList} ${isOpen ? styles.open : ''}`} ref={navListRef}>
          <ul>
            <li>
              <Link to="aboutMe" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                {t('aboutMe')}
              </Link>
            </li>
            <li>
              <Link to="mySkills" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                {t('mySkills')}
              </Link>
            </li>
            <li>
              <Link to="myProjects" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                {t('myProjects')}
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                {t('contact')}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hamburgerové menu na mobilných zariadeniach */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>

        {/* Jazykové prepínanie */}
        <div className={styles.languageSwitcher}>
          <button onClick={() => i18n.changeLanguage('en')}>EN</button>
          <button onClick={() => i18n.changeLanguage('sk')}>SK</button>
        </div>
      </header>

      {/* Hlavný obsah stránky */}
      <div ref={mainContentRef} className={styles.mainContent}>
        {/* Tu ide obsah stránky */}
      </div>
    </>
  );
};

export default Header;
