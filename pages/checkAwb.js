import Head from 'next/head'
import Navbar from './front/component/navbar'
import Footer from './front/component/footer'
import Content from './front/resi/content'
import CustomCarousel from './front/component/carousel'

const checkAwb = () => {
    return(
        <>
        <Head>
            <style>{`    
                body{
                    background-color: #fff;            
                }     
                .content-section{                            
                    font-family: 'Roboto', sans-serif;                
                } 
            `}</style>
            </Head>
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap"
                rel="stylesheet"
            />
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
        </>        
      );
}

export default checkAwb;