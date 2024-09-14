import React from 'react';
import styles from '../styles/mySkills.module.css';
import { useTranslation } from 'react-i18next';

const skills = [
  { name: 'React', level: 90 },
  { name: 'Vue', level: 80 },
  { name: 'JavaScript', level: 95 },
  { name: 'CSS', level: 85 },
  { name: 'Laravel', level: 75 },
  { name: 'NodeJS', level: 80 },
];

const MySkills: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="mySkills" className={styles.mySkills}>
      <h2>{t('mySkillsTitle')}</h2>
      <div className={styles.skillsGrid}>
        {skills.map(skill => (
          <div key={skill.name} className={styles.skill}>
            <span>{skill.name}</span>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
