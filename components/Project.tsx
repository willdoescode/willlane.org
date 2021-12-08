import type { NextPage } from 'next';

import styles from '../styles/Project.module.css'

interface ProjectProps {
  name: string;
  description: string;
  url: string;
  language?: string;
  stars: number;
  isForked: boolean;
}

const Project: NextPage<ProjectProps> = ({
  name,
  description,
  url,
  language,
  stars,
  isForked,
}) => {
  return (
    <a href={url} target="_blank" rel="noreferrer" className={styles.project}>
      <h1 className={styles.name}>{name}</h1>
      <h2 className={styles.description}>{description}</h2>
    
      {isForked && <h2>repo was forked</h2>}
      <h2 className={styles.stars}>{stars} stars</h2>
      {language && <h3>{language}</h3>}
    </a>
  )
}

export default Project;