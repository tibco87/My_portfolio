import React from 'react';
import styles from '../styles/aboutMe.module.css';
import { useTranslation } from 'react-i18next';
import profileImage from '../assets/profile.jpg'; // Import obrázku

const AboutMe: React.FC = () => {
  const { t } = useTranslation(); // Používame preklady

  return (
    <section id="aboutMe" className={styles.aboutMe}>
      {/* Animovaný text "Ahoj!" s rukou, umiestnený nad fotkou */}
      <div className={styles.waveText}>
        <span>{t('aboutMeGreeting')} </span>
        <span className={styles.wave}>{t('aboutMeWavingHand')}</span> {/* Animovaná ruka */}
      </div>
      
      <div className={styles.content}>
        <img src={profileImage} alt="Tibor Kútik" className={styles.photo} />

        {/* Animovaný text s menom a profesiou pomocou CSS */}
        <div className={styles.typedText}>
          <span className={styles.typing}>
            <span className={styles.pTag}>&lt;p&gt;</span> {/* Otvárací <p> tag so žltou farbou */}
            {t('aboutMeTypedText')} {/* Použitie prekladu */}
            <span className={styles.pTag}>&lt;/p&gt;</span> {/* Zatvárací </p> tag so žltou farbou */}
          </span>
        </div>

        {/* Stály text */}
        <p className={styles.description}>
          {t('aboutMeDescription')}
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
