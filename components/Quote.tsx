import type { NextPage } from 'next';
// import { useState, useEffect } from 'react'

import styles from '../styles/Quote.module.css'

interface Quote {
  author: string;
  content: string;
}

export interface QuoteProps {
  quote: Quote;
}

const Quote: NextPage<QuoteProps> = ({quote}: QuoteProps) => {
  return (
    <>
      <h1 className={styles.content}>{quote.content}</h1>
      <h2 className={styles.author}>- {quote.author}</h2>
    </>
  )
}



export default Quote;
