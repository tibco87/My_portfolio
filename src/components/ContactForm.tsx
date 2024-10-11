import React, { useState } from 'react';
import styles from '../styles/contactForm.module.css';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';

// Importuj ikony
import facebookIcon from '../assets/icons/facebook.png';
import linkedinIcon from '../assets/icons/linkedin.png';
import githubIcon from '../assets/icons/github.png';
import phoneIcon from '../assets/icons/phone.png'; // Pridajte ikonu pre telefón

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        'service_z25kael', 
        'template_oo4qijl', 
        formData,
        'sbuylDoXo-YRrsYly'
      )
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        setIsSubmitted(true);
        setErrorMessage('');
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
        setErrorMessage('Error sending message. Please try again.');

        setTimeout(() => {
          setErrorMessage('');
        }, 5000);
      });
  };

  return (
    <section id="contact" className={styles.contactForm}>
      <h2>{t('contact')}</h2>

      {errorMessage && (
        <p className={styles.errorMessage}>
          {errorMessage}
        </p>
      )}

      <div className={styles.formContainer}>
        <div className={styles.formBackground}>
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
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t('messagePlaceholder')}
              required
              className={styles.textarea}
            />

            <button type="submit" className={styles.submitButton} disabled={isSubmitted}>
              {isSubmitted ? t('messageSentSuccess') : t('submit')}
            </button>
          </form>
        </div>
      </div>

      <div className={styles.contactInfo}>
        <p>{t('contactMeVia')}</p>
        <div className={styles.icons}>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img src={facebookIcon} alt="Facebook" className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className={styles.icon} />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub" className={styles.icon} />
          </a>
          {/* Telefónne číslo s ikonou */}
          <a href="tel:+421919487774" target="_blank" rel="noreferrer">
            <img src={phoneIcon} alt="Phone" className={styles.icon} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
