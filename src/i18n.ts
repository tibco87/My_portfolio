import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      aboutMe: "About Me",
      aboutMeTitle: "About Me",
      aboutMeDescription: "I am Tibor Kútik, a passionate web developer with expertise in various technologies.",
      mySkills: "My Skills",
      mySkillsTitle: "My Skills",
      myProjects: "My Projects",
      myProjectsTitle: "My Projects",
      showProjects: "Show Projects",
      hideProjects: "Hide Projects",
      contact: "Contact",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      phonePlaceholder: "Your Phone number",
      messagePlaceholder: "Your Message",
      submit: "Send Message",
      contactMeVia: "Or contact me via:",
      createdBy: "Created by"
    }
  },
  sk: {
    translation: {
      aboutMe: "O mne",
      aboutMeTitle: "O mne",
      mySkills: "Moje zručnosti",
      aboutMeDescription: "Som Tibor Kútik, nadšený webový vývojár so skúsenosťami v rôznych technológiách.",
      mySkillsTitle: "Moje Zručnosti",
      myProjects: "Moje Projekty",
      myProjectsTitle: "Moje Projekty",
      showProjects: "Zobraziť Projekty",
      hideProjects: "Skryť Projekty",
      contact: "Kontakt",
      namePlaceholder: "Vaše meno",
      emailPlaceholder: "Váš email",
      phonePlaceholder: "Vaše telefónne číslo",
      messagePlaceholder: "Vaša správa",
      submit: "Odoslať správu",
      contactMeVia: "Alebo ma kontaktujte cez:",
      createdBy: "Vytvoril"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Predvolený jazyk
  interpolation: {
    escapeValue: false, // React už escapuje hodnoty
  },
});

export default i18n;
