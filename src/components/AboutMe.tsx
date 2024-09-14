import React from 'react';
import styles from '../styles/aboutMe.module.css';
import { useTranslation } from 'react-i18next';
import { ReactTyped } from 'react-typed';
import profileImage from '../assets/profile.jpg'; // Import obrázku

const AboutMe: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="aboutMe" className={styles.aboutMe}>
      <h2>{t('aboutMeTitle')}</h2>
      <div className={styles.content}>
        <img src={profileImage} alt="Tibor Kútik" className={styles.photo} />
        <div className={styles.typedText}>
          <ReactTyped
            strings={[
              t('aboutMeDescription'),
              "I love coding in React and TypeScript!",
              "Passionate about web development!"
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
