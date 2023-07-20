import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './front/component/navbar'
import CustomCarousel from './front/component/carousel'
import Content from './front/dashboard/content'
import Footer from './front/component/footer'

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
      <Content/>
      <Footer/>
    </div>
  );
}


export default Home;