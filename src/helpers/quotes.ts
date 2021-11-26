export interface Quote {
  _id: string,
  content: string,
  author: string,
  authorSlug: string,
  length: number,
  tags: string[],
};

export const getQuote = (maxLen = 100): Promise<Quote> => {
  return fetch(`https://api.quotable.io/random?maxLength=${maxLen}`)
    .then(res => res.json())
    .then(q => q as Quote);
}
