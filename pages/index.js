import Head from 'next/head'
import Header from '../Components/Header'
import Homee from '../Components/Homee'
import React from 'react'
import Footer from '../Components/Footer'

export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>Electric Cars, Solar & Clean Energy</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Header/>
      <Homee/>
    </div>
  )
}
