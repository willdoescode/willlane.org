import type { NextPage } from 'next';

import Header from '../components/Header';

interface Repo {
  name: string;
  description: string;
  full_name: string;
  url: string;
  stargazers_count: number;
  watchers_count: number;
  language?: string;
}

type Repos = [Repo];

export const getStaticProps = async () => {
  const tstr = `token ${process.env.GITHUB_AUTH_TOKEN}`;
  const pages_of_repos = [];

  for (let i = 1; i <= 2; i++) {
    const res = await fetch(
      `https://api.github.com/users/willdoescode/repos?page=${i}&per_page=100`,
      {
        headers: {
          Authorization: tstr,
        },
      }
    );

    const repos: Repos = await res.json();
    pages_of_repos.push(repos);
  }

  const repos = pages_of_repos.flat();

  return {
    props: {
      repos: repos,
    }
  };
}

interface ProjectsProps {
  repos: Repos; 
}

const Projects: NextPage<ProjectsProps> = ({repos}: ProjectsProps) => {
  return (
    <>
      <Header />

      {repos.sort((a, b) => b.stargazers_count - a.stargazers_count).map((repo) => {
        return (
          <>
            <h1>{repo.name} {repo.description}</h1>
            <h2>{repo.url}</h2>
            {repo.language && <h3>{repo.language}</h3>}
          </>
        );
      })}
    </>
  )
}

export default Projects;
