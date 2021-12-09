import type { NextPage } from 'next';

import Header from '../components/Header';
import Quote from '../components/Quote';

type QuoteProps = {quote: {author: string, content: string}};

const Index: NextPage<QuoteProps> = ({quote}) => {
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
