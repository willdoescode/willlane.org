const Languages = {
  Rust: {
    name: 'Rust',
    img: '/images/rust-logo.png',
  },
  Haskell: {
    name: 'Haskell',
    img: '/images/haskell-logo.png',
  }
} as const;

export type LanguageKey = keyof typeof Languages;

export interface Language {
  readonly name: string,
  readonly img: string, 
};

export const getLang = (lang: LanguageKey): Language => {
  return Languages[lang];
}
