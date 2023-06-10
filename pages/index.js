import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './front/component/navbar'
import CustomCarousel from './front/component/carousel'
import ContentSection from './front/component/content'

const Home = () => {
  return(
    <div>
      <Navbar/>
      <style jsx>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 100;
        }
      `}</style>
      <CustomCarousel/>
      <ContentSection/>
      <div className='container'>
        <h1> Welcome</h1>
      </div>
    </div>
  );
}


export default Home;