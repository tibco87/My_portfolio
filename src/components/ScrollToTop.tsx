import React, { useState, useEffect } from 'react';
import styles from '../styles/scrollToTop.module.css'; // Import štýlov

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Sledovanie scrollovania
  const toggleVisibility = () => {
    if (window.pageYOffset > 90) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className={styles.scrollToTop} onClick={scrollToTop}>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            viewBox="0 0 24 24"
          >
            <path d="M12 3l9 9-1.41 1.41L12 5.83 4.41 12.41 3 11z" />
          </svg>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
