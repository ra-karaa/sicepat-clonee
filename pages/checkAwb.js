import Navbar from './front/component/navbar'
import Footer from './front/component/footer'
import Content from './front/resi/content'

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
          <Content/>     
          <Footer/>
        </div>
      );
}

export default checkAwb;