import '../styles/globals.css'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Requirements from '../components/Requirements';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Navbar />
      <HeroSection />
      <About />
      <Requirements /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
