import Navbar from './front/component/navbar'
import Footer from './front/component/footer'
import Content from './front/resi/content'
import CustomCarousel from './front/component/carousel'

const checkAwb = () => {
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

export default checkAwb;