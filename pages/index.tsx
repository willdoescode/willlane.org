import type { NextPage } from 'next'
import Header from '../components/Header'

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export const getStaticProps = async () => {
  const quote = await fetch('https://api.quotable.io/random?maxLength=100');

  return {
    props: {
      quote: await quote.json()
    }
  };
}

interface Quote {
  author: string;
  content: string;
}

interface IndexProps {
  quote: Quote;
}

const Index: NextPage<IndexProps> = ({quote}: IndexProps) => {
  return (
    <>
      <Header /> 
      <h1>{quote.content}</h1>
      <h2>- {quote.author}</h2>
    </>
  )
}

export default Index;
