import React, { useEffect, useState } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'glass' : ''}`} style={styles.header}>
      <div className="container" style={styles.container}>
        <div style={styles.logo}>
          <span style={styles.logoAccent}>Ayush</span> Sharma
        </div>
        <nav style={styles.nav}>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#skills" style={styles.navLink}>Skills</a>
          <a href="#projects" style={styles.navLink}>Projects</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>
        <div style={styles.socials}>
          <a href="https://github.com/ayushsharma53/" target="_blank" rel="noreferrer" style={styles.iconLink}>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ayush-sharma-82795a353" target="_blank" rel="noreferrer" style={styles.iconLink}>
            LinkedIn
          </a>
          <a href="mailto:myselfayush0536@gmail.com" style={styles.iconLink}>
            Email
          </a>
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 100,
    transition: 'all 0.3s ease',
    padding: '1.5rem 0',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontFamily: 'var(--font-manrope)',
    fontSize: '1.5rem',
    fontWeight: 700,
    letterSpacing: '-0.02em',
  },
  logoAccent: {
    color: 'var(--color-primary-light)',
  },
  nav: {
    display: 'flex',
    gap: '2rem',
  },
  navLink: {
    fontSize: '0.875rem',
    fontWeight: 500,
    color: 'var(--color-on-surface-variant)',
    transition: 'color 0.2s',
  },
  socials: {
    display: 'flex',
    gap: '1rem',
  },
  iconLink: {
    color: 'var(--color-on-surface-variant)',
    transition: 'color 0.2s',
  }
};

export default Header;
