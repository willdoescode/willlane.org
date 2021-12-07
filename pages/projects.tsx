import type { NextPage } from 'next';
import Project from '../components/Project';
import styles from '../styles/Projects.module.css';

import Header from '../components/Header';

interface Repo {
  name: string;
  description: string;
  full_name: string;
  url: string;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
  language?: string;
  fork: boolean;
}

type Repos = [Repo];

export const getStaticProps = async () => {
  const token = `token ${process.env.GITHUB_AUTH_TOKEN}`;
  const pages_of_repos = [];

  for (let i = 1; i <= 2; i++) {
    const res = await fetch(
      `https://api.github.com/users/willdoescode/repos?page=${i}&per_page=100`,
      {
        headers: {
          Authorization: token,
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

      {repos
        .sort((a, b) => 
            b.stargazers_count 
            - a.stargazers_count
        )
        .map((repo) => 
          <Project 
            key={repo.name}
            name={repo.name}
            description={repo.description}
            stars={repo.stargazers_count}
            url={repo.html_url} 
            isForked={repo.fork}
          />
        )}
    </>
  )
}

export default Projects;
