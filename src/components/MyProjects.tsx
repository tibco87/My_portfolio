import React, { useState } from 'react';
import styles from '../styles/myProjects.module.css';
import { useTranslation } from 'react-i18next';

const MyProjects: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="myProjects" className={styles.myProjects}>
      <h2>{t('myProjectsTitle')}</h2>
      <button onClick={() => setIsOpen(!isOpen)} className={styles.toggleButton}>
        {isOpen ? t('hideProjects') : t('showProjects')}
      </button>
      {isOpen && (
        <div className={styles.projectList}>
          <div className={styles.projectCard}>Project 1</div>
          <div className={styles.projectCard}>Project 2</div>
          <div className={styles.projectCard}>Project 3</div>
        </div>
      )}
    </section>
  );
};

export default MyProjects;
