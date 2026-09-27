import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const projects = [
  {
    title: 'Parelt (Pet Care System)',
    description: 'A comprehensive ruitine scheduler for pets connecting the ownwer to the helper.',
    demoLink: 'https://github.com/ayushsharma53/PareIt',
    featured: true
  },
  {
    title: 'Safe-Steps',
    description: 'Real-time safety monitoring system utilizing YOLOv5 and YOLOv8 models for hazard detection.',
    demoLink: 'https://github.com/ayushsharma53/Safe-steps',
    featured: true
  },
  {
    title: 'Assignment Manager',
    description: 'Streamlining academic workflows with a centralized dashboard for students and educators. Focusing on intuitive submission pipelines.',
    statusText: '65% Architectural Completion',
    demoLink: 'https://github.com/ayushsharma53',
    featured: true
  },
  {
    title: 'Resume Analyzer',
    description: 'Advanced ATS scoring platform to bridge the gap between job descriptions and professional resumes.',
    statusText: 'ATS Score: High Precision',
    demoLink: 'https://github.com/ayushsharma53/Resume-Analyzer',
    featured: true
  },
  {
  title: 'Jira Lite',
  description: 'A lightweight project management platform for organizing workspaces, projects, and tasks with role-based collaboration, filtering, and workflow tracking.',
  statusText: 'Production Ready',
  demoLink: 'https://jira-lite-8vp0.onrender.com/',
  featured: true
},
{
  title: 'Real Estate Management System',
  description: 'A full-stack property management platform connecting customers, agents, and administrators through secure property listings, bookings, and role-based dashboards.',
  statusText: 'Production Ready',
  demoLink: 'https://rems-frontend-eight.vercel.app/',
  featured: true
},
];


  const handleCardClick = (link) => {
    if (link && link !== '#') {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" style={styles.section}>
      <div className="container" style={styles.container}>
        <div style={styles.header}>
          <h2>Featured Projects</h2>
          <p style={styles.subtitle}>Architectural experiments and production-ready solutions.</p>
        </div>

        
          <div style={styles.grid}>
            {projects.map((project) => (
              <div 
                key={project._id} 
                style={styles.card} 
                className="project-card"
                onClick={() => handleCardClick(project.demoLink || project.caseStudyLink)}
              >
                <h3 style={styles.title}>{project.title}</h3>
                <p style={styles.description}>{project.description}</p>
                <div style={styles.footer}>
                  {project.statusText ? (
                    <span className="label-sm status-pill" style={styles.statusPill}>
                      {project.statusText}
                    </span>
                  ) : (
                    <span className="project-link" style={styles.link}>
                      View GitHub Repository;
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        
      </div>
      <style>
        {`
          .project-card {
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            cursor: pointer;
            overflow: hidden;
            border-top: 2px solid transparent !important;
          }
          .project-card::before {
            content: '';
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: radial-gradient(circle at 50% -20%, rgba(0, 122, 255, 0.15) 0%, transparent 60%);
            opacity: 0;
            transition: opacity 0.4s ease;
            pointer-events: none;
          }
          .project-card:hover {
            background-color: var(--color-surface-container-high) !important;
            border-top: 2px solid var(--color-primary-light) !important;
            transform: translateY(-8px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 122, 255, 0.1);
          }
          .project-card:hover::before {
            opacity: 1;
          }
          .project-link {
            transition: color 0.3s ease;
          }
          .project-card:hover .project-link {
            text-shadow: 0 0 8px rgba(173, 198, 255, 0.6);
          }
          .status-pill {
            background: linear-gradient(135deg, rgba(45, 52, 73, 0.8), rgba(65, 71, 85, 0.5));
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.05);
          }
        `}
      </style>
    </section>
  );
};

const styles = {
  section: {
    padding: 'var(--spacing-20) 0',
  },
  container: {
    width: '100%',
  },
  header: {
    marginBottom: '4rem',
  },
  subtitle: {
    color: 'var(--color-on-surface-variant)',
    marginTop: '0.5rem',
  },
  loading: {
    color: 'var(--color-primary-light)',
    textAlign: 'center',
    padding: '3rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: 'var(--spacing-5)',
  },
  card: {
    backgroundColor: 'var(--color-surface-container-low)',
    padding: 'var(--spacing-8)',
    borderRadius: 'var(--radius-md)',
    display: 'flex',
    flexDirection: 'column',
    borderTop: '2px solid transparent',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  description: {
    color: 'var(--color-on-surface-variant)',
    fontSize: '1rem',
    flex: 1,
    marginBottom: '2rem',
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    height: '2rem',
  },
  statusPill: {
    backgroundColor: 'var(--color-surface-highest)',
    padding: '0.25rem 0.75rem',
    borderRadius: 'var(--radius-full)',
    color: 'var(--color-primary-light)',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    color: 'var(--color-primary-light)',
    fontWeight: 600,
  }
};

export default Projects;
