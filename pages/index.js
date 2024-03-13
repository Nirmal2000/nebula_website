import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Requirements from '../components/Requirements';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Requirements />      
    </>
  )
}
