import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import MySkills from './components/MySkills';
import MyProjects from './components/MyProjects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop komponentu

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <MySkills />
      <MyProjects />
      <ContactForm />
      <Footer />
      <ScrollToTop /> {/* Pridaj tlačidlo ScrollToTop */}
    </div>
  );
};

export default App;
