import React from 'react';
import styles from '../styles/footer.module.css';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} {t('createdBy')} Tibor Kútik</p>
      
    </footer>
  );
};

export default Footer;
