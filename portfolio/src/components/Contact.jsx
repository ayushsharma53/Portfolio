import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Replace YOUR_FORMSPREE_ID with the ID from your Formspree dashboard
      const res = await fetch('https://formspree.io/f/24345formspree', {
        method: 'POST',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" style={styles.section}>
      <div className="container" style={styles.container}>
        <div style={styles.content}>
          <div style={styles.header}>
            <h2>Ready to Start?</h2>
            <p style={styles.subtitle}>I'm currently looking for new opportunities. Send me a message!</p>
          </div>

          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                style={styles.input}
                className="input-glow"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div style={styles.inputGroup}>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                style={styles.input}
                className="input-glow"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div style={styles.inputGroup}>
              <textarea
                name="message"
                placeholder="Your message"
                rows="4"
                style={{ ...styles.input, resize: 'vertical' }}
                className="input-glow"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary" style={styles.button} disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && <p style={styles.success}>Message sent successfully!</p>}
            {status === 'error' && <p style={styles.error}>Something went wrong. Try again.</p>}
          </form>
        </div>
      </div>
      <style>
        {`
          .input-glow {
            transition: all 0.3s ease;
          }
          .input-glow:focus {
            outline: none;
            border-bottom-color: var(--color-primary-light) !important;
            box-shadow: 0 4px 10px rgba(0, 122, 255, 0.1);
          }
        `}
      </style>
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
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    width: '100%',
    maxWidth: '500px',
  },
  header: {
    marginBottom: '3rem',
    textAlign: 'center',
  },
  subtitle: {
    color: 'var(--color-on-surface-variant)',
    marginTop: '0.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  inputGroup: {
    width: '100%',
  },
  input: {
    width: '100%',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(65, 71, 85, 0.3)',
    color: 'var(--color-on-surface)',
    padding: '0.75rem 0',
    fontFamily: 'var(--font-inter)',
    fontSize: '1rem',
  },
  button: {
    width: '100%',
    marginTop: '1rem',
  },
  success: {
    color: 'var(--color-primary-light)',
    textAlign: 'center',
  },
  error: {
    color: '#ffb4ab',
    textAlign: 'center',
  }
};

export default Contact;