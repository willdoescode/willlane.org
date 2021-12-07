import type { NextPage } from 'next';

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
    <>
      <h1>{name} {description}</h1>
      {isForked && <h2>repo was forked</h2>}
      <h2>{url} <br /> {stars} stars</h2>
      {language && <h3>{language}</h3>}
    </>
  )
}

export default Project;