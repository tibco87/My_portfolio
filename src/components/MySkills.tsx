import React from 'react';
import styles from '../styles/mySkills.module.css';
import { useTranslation } from 'react-i18next';

// Importovanie PNG ikon
import reactIcon from '../assets/icons/react.png';
import vueIcon from '../assets/icons/vue.png';
import angularIcon from '../assets/icons/angular.jpg';
import HTMLIcon from '../assets/icons/html.png';
import cssIcon from '../assets/icons/css.png';
import javascriptIcon from '../assets/icons/javascript.png';
import typescriptIcon from '../assets/icons/typescript.png';
import nodejsIcon from '../assets/icons/nodejs.png';
import githubIcon from '../assets/icons/github.png';
import gitlabIcon from '../assets/icons/gitlab.png';
import phpIcon from '../assets/icons/php.png';
import pythonIcon from '../assets/icons/python.png';

// Skilly s úrovňami od 0 do 5
const skills = [
  { name: 'React', level: 4, icon: reactIcon },
  { name: 'VueJS', level: 3, icon: vueIcon },
  { name: 'Angular', level: 3, icon: angularIcon },
  { name: 'HTML', level: 5, icon: HTMLIcon },
  { name: 'CSS', level: 4, icon: cssIcon },
  { name: 'JavaScript', level: 5, icon: javascriptIcon },
  { name: 'TypeScript', level: 4, icon: typescriptIcon },
  { name: 'NodeJS', level: 3, icon: nodejsIcon },
  { name: 'GitHub', level: 3, icon: githubIcon },
  { name: 'GitLab', level: 3, icon: gitlabIcon },
  { name: 'PHP', level: 2, icon: phpIcon },
  { name: 'Python', level: 2, icon: pythonIcon },
];

const MySkills: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="mySkills" className={styles.mySkills}>
      <h2 className={styles.mySkillsTitle}>{t('mySkillsTitle')}</h2> {/* Pridaná trieda mySkillsTitle */}
      <div className={styles.skillsGrid}>
        {skills.map(skill => (
          <div key={skill.name} className={styles.skill}>
            <img src={skill.icon} alt={`${skill.name} icon`} className={styles.icon} />
            <span>{skill.name}</span>
            <div className={styles.battery}>
              {/* Vykreslíme 5 častí batérie */}
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className={`${styles.batteryLevel} ${
                    index < skill.level ? styles.filled : ''
                  }`}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
