import React, { useState } from 'react';
import styles from '../styles/contactForm.module.css';
import { useTranslation } from 'react-i18next';

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const phoneChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className={styles.contactForm}>
      <h2>{t('contact')}</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={t('namePlaceholder')}
          required
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={t('emailPlaceholder')}
          required
          className={styles.input}
        />
         <input
          type="number"
          name="Phone"
          value={formData.name}
          onChange={phoneChange}
          placeholder={t('phonePlaceholder')}
          required
          className={styles.input}
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={t('messagePlaceholder')}
          required
          className={styles.textarea}
        />
        <button type="submit" className={styles.submitButton}>{t('submit')}</button>
      </form>
      <div className={styles.contactInfo}>
        <p>{t('contactMeVia')}</p>
        <div className={styles.icons}>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img src="/path/to/facebook-icon.png" alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <img src="/path/to/linkedin-icon.png" alt="LinkedIn" />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noreferrer">
            <img src="/path/to/github-icon.png" alt="GitHub" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
