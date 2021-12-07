import type { NextPage } from 'next';

import Header from '../components/Header';
import Quote from '../components/Quote';
import styles from '../styles/Home.module.css';

const Index: NextPage = () => {
  return (
    <>
      <Header />
      <Quote />
    </>
  )
}

export default Index;
