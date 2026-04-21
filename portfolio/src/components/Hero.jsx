import React from 'react';

const Hero = () => {
  return (
    <section id="about" style={styles.section}>
      <div className="container" style={styles.container}>
        <div style={styles.content}>
          <div style={styles.eyebrow} className="label-sm">Full-Stack Developer</div>
          <h1 className="display-lg" style={styles.title}>
            Building <span style={styles.highlight}>Robust</span> Software.
          </h1>
          <p style={styles.description}>
            Specializing in scalable architectures and intelligent systems. Turning complex logic into seamless experiences.
          </p>
          <div style={styles.actions}>
            <a href="#projects" className="btn btn-primary">
              View My Projects &rarr;
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    paddingTop: 'var(--spacing-24)',
    paddingBottom: 'var(--spacing-20)',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    width: '100%',
  },
  content: {
    maxWidth: '800px',
  },
  eyebrow: {
    color: 'var(--color-primary-light)',
    marginBottom: '1rem',
    display: 'inline-block',
    padding: '0.25rem 1rem',
    background: 'var(--color-surface-container-highest)',
    borderRadius: 'var(--radius-full)',
  },
  title: {
    marginBottom: '1.5rem',
  },
  highlight: {
    background: 'linear-gradient(135deg, var(--color-primary-light), var(--color-primary-container))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  description: {
    fontSize: '1.125rem',
    color: 'var(--color-on-surface-variant)',
    marginBottom: '2.5rem',
    maxWidth: '600px',
  },
  actions: {
    display: 'flex',
    gap: '1.5rem',
  }
};

export default Hero;
