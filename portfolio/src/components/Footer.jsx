import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        <div style={styles.text}>
          © {new Date().getFullYear()} Ayush Sharma. Built with precision.
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: 'var(--spacing-8) 0',
    backgroundColor: 'var(--color-surface)',
    borderTop: '1px solid var(--color-surface-container-low)',
  },
  container: {
    textAlign: 'center',
  },
  text: {
    color: 'var(--color-outline-variant)',
    fontSize: '0.875rem',
  }
};

export default Footer;
