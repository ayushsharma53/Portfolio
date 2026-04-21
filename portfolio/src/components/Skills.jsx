import React from 'react';

const Skills = () => {
  const coreSetup = [
    { name: 'Operating Systems', abbr: 'OS' },
    { name: 'Networking', abbr: 'CN' },
    { name: 'Database Management', abbr: 'DBMS' },
    { name: 'Machine Learning', abbr: 'ML' }
  ];

  const programmingLanguages = ['C++', 'Java', 'JavaScript'];
  const mernFrameworks = ['MongoDB', 'Express.js', 'React', 'Node.js'];

  return (
    <section id="skills" style={styles.section}>
      <div className="container" style={styles.container}>
        <div style={styles.header}>
          <h2>The Tech Stack</h2>
          <p style={styles.subtitle}>Engineering modern applications from foundational CS to frontend.</p>
        </div>
        
        <div style={styles.grid}>
          <div style={styles.card}>
            <div className="label-sm" style={styles.cardLabel}>Programming</div>
            <h3>Robust Algorithms</h3>
            <p style={styles.cardDesc}>Foundation built on competitive programming and robust system design.</p>
            <div style={styles.miniPillContainer}>
              {programmingLanguages.map((lang, idx) => (
                <div key={idx} style={styles.miniPill}>{lang}</div>
              ))}
            </div>
          </div>
          
          <div style={styles.card}>
            <div className="label-sm" style={styles.cardLabel}>Web Development</div>
            <h3>MERN Architecture</h3>
            <p style={styles.cardDesc}>Engineering modern full-stack applications focused on performance and SEO.</p>
            <div style={styles.miniPillContainer}>
              {mernFrameworks.map((fw, idx) => (
                <div key={idx} style={styles.miniPill}>{fw}</div>
              ))}
            </div>
          </div>

          <div style={styles.cardFill}>
            <div className="label-sm" style={styles.cardLabel}>Core CS Fundamentals</div>
            <div style={styles.pillContainer}>
              {coreSetup.map((skill, idx) => (
                <div key={idx} style={styles.pill}>
                  <span style={styles.pillAbbr}>{skill.abbr}</span>
                  <span style={styles.pillName}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: 'var(--spacing-20) 0',
    backgroundColor: 'var(--color-surface-container-lowest)',
  },
  container: {
    width: '100%',
  },
  header: {
    marginBottom: '4rem',
    textAlign: 'center',
  },
  subtitle: {
    color: 'var(--color-on-surface-variant)',
    marginTop: '0.5rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 'var(--spacing-4)',
  },
  card: {
    backgroundColor: 'var(--color-surface-container-low)',
    padding: 'var(--spacing-8)',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--color-surface-highest)',
  },
  cardFill: {
    backgroundColor: 'var(--color-surface-container-high)',
    padding: 'var(--spacing-8)',
    borderRadius: 'var(--radius-md)',
    gridColumn: '1 / -1', 
  },
  cardLabel: {
    color: 'var(--color-primary-light)',
    marginBottom: '1rem',
  },
  cardDesc: {
    color: 'var(--color-on-surface-variant)',
    marginTop: '1rem',
    fontSize: '0.9rem',
  },
  miniPillContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginTop: '1.2rem',
  },
  miniPill: {
    backgroundColor: 'var(--color-surface)',
    padding: '0.3rem 0.8rem',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid var(--color-outline-variant)',
    fontSize: '0.8rem',
    color: 'var(--color-on-surface)',
  },
  pillContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    marginTop: '1.5rem',
  },
  pill: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'var(--color-surface)',
    padding: '0.5rem 1rem',
    borderRadius: 'var(--radius-full)',
    border: '1px solid var(--color-outline-variant)',
  },
  pillAbbr: {
    color: 'var(--color-primary-light)',
    fontWeight: 'bold',
    marginRight: '0.5rem',
  },
  pillName: {
    fontSize: '0.85rem',
  }
};

export default Skills;
