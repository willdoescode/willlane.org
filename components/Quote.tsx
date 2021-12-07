import type { NextPage } from 'next';
import { useState, useEffect } from 'react'

interface Quote {
  author: string;
  content: string;
}

const Quote: NextPage = () => {
  const [quote, setQuote] = useState<Quote>();
  const [isLoading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    fetch('https://api.quotable.io/random?maxLength=100')
      .then(res => res.json())
      .then(data => { 
        setQuote(data); 
        setLoading(false) 
      });
  }, [])

  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    )
  }

  if (!quote) {
    return (
      <>
        <h1>Error</h1>
      </>
    )
  }

  return (
    <>
      <h1>{quote.content}</h1>
      <h2>- {quote.author}</h2>
    </>
  )
}

export default Quote;