import type { NextPage } from 'next'
import Header from '../components/Header'

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Index: NextPage = () => {
  return (
    <>
      <Header /> 
      <h1>Hello World</h1>
    </>
  )
}

export default Index;
