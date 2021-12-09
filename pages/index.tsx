import type { NextPage } from 'next';
import type { QuoteProps } from '../../components/Quote';

import Header from '../components/Header';
import Quote from '../components/Quote';
import styles from '../styles/Home.module.css';


const Index: NextPage = ({quote}: QuoteProps) => {
  return (
    <>
      <Header />
      <Quote quote={quote} />
    </>
  )
}

Index.getInitialProps = async (): Promise<QuoteProps> => {
  const res = await fetch('https://api.quotable.io/random?maxLength=100');
  const quote: Quote = await res.json();

  return { quote };
}


export default Index;
