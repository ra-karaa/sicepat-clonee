import Head from 'next/head';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
    <Head>
        <style>{` 
         .footer{
            background-color : #cd2028;            
         }           
         .main {            
            padding-top : 50px;
            color : white;
            font-family : 'Roboto';   
            padding-bottom : 100px;         
          }
          .link{
            margin-left : 100px;           
          }
          .mid {
            margin-left : -100px;
          }
          .midle {
            margin-left : -40px;
          }
          .last{
            margin-right : 40px;
          }
          .label {            
            font-weight : normal;
            font-size : 13px;    
            color : #fff;        
          }
          .space{
            padding-bottom : 20px;
          }
          .icon{
            width: 30px;
            height: 30px;
          }
          .image-download{
            width: 130px;
            height: 40px;
          }
          .line {
            align-item : center;
            border-top: 2px solid #fff;
            width : 1000px;      
            margin-left : 150px;       
            padding-bottom : 20px;
          }

          @media (max-width: 767.98px) {
            .mid {
              margin-left : 0px;
            }
            .link {
              margin-left: 0px;
            } 
            .last {
                margin-left : 0px;
            }  
            .midle {
                margin-left: 0px;
            } 
            .line {
                align-item : center;
                border-top: 2px solid #fff;
                width : 360px;      
                margin-left : 10px;       
                padding-bottom : 20px;
            }        
          }
        `}</style>
      </Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap"
        rel="stylesheet"
      />
    <div className='footer'>
        <Container>            
            <Row className='main d-flex'>
                <Col md={3} className='link'>
                    <p className='text-left'> INFORMASI </p>
                    <Row>
                        <Container>
                            <div className='mt-5'>
                                <p className='label'> FAQ </p>
                                <p className='label'> Terms & Condition </p>
                                <p className='label'> Privacy Policy </p>
                            </div>                            
                        </Container>
                    </Row>
                </Col>
                <Col md={3} className='mid'>
                    <p className='text-start'> PRODUK DAN LAYANAN </p>
                    <Row>
                        <Container>
                            <div className='mt-5'>
                                <p className='label'> SIUNTUNG </p>
                                <p className='label'> BEST </p>
                                <p className='label'> HALU </p>
                                <p className='label'> GOKIL </p>
                                <p className='label'> H3LO </p>
                                <p className='label'> SICEPAT GO! </p>
                            </div>                            
                        </Container>
                    </Row>
                </Col>
                <Col md={4} className='midle'>
                    <p className='text-left'> INFO KONTAK </p>
                    <Row>
                        <Container>
                            <div className='mt-5'>
                                <Row className='flex'>
                                    <Col md={1}>
                                        <img src="https://cdn-icons-png.flaticon.com/128/446/446075.png" className='icon'/>
                                    </Col>
                                    <Col md={11}>
                                        <p className='label'> Jl. Ir. H. Juanda 3 No. 17-19, RT.008/RW.002, Kel. Kebon Kelapa Kec. Gambir, Jakarta Pusat 10120 </p>
                                    </Col>
                                </Row>       
                                <Row className='flex mt-2'>
                                    <Col md={1}>
                                        <img src="https://cdn-icons-png.flaticon.com/128/126/126509.png" className='icon'/>
                                    </Col>
                                    <Col md={11}>
                                        <p className='label'> 021-3020-5050 </p>
                                    </Col>
                                </Row>       
                                <Row className="align-items-center mt-2">
                                    <Col md={1} style={{ display: 'flex' }}>
                                        <img src="https://cdn-icons-png.flaticon.com/128/2111/2111774.png" className="icon" />
                                    </Col>
                                    <Col md={11}>
                                        <p className="label">0812 9966 6088</p>
                                    </Col>
                                </Row>
                                <Row className="align-items-center mt-2">
                                    <Col md={1} style={{ display: 'flex' }}>
                                        <img src="https://cdn-icons-png.flaticon.com/128/646/646094.png" className="icon" />
                                    </Col>
                                    <Col md={11}>
                                        <p className="label">Support: customer.care@sicepat.com</p>
                                    </Col>
                                </Row>                                                          
                            </div>                            
                        </Container>
                    </Row>
                </Col>
                <Col md={2} className='last'>
                    <p className='text-left'> DOWNLOAD APP </p>
                    <Row>
                        <Container>
                            <div className='mt-5'>
                                <img src='https://www.sicepat.com/static/img/playstore@2x.png' className='image-download'/>
                                <div className='mt-2'>
                                <img src='https://www.sicepat.com/static/img/appstore@2x.png' className='image-download'/>                                
                                </div>                                
                            </div>

                        </Container>
                    </Row>                    
                </Col>
            </Row>
            <div className='line'></div>    
            <Row className='space'>
                <Col md={12} className='mt-3 link'>
                    <p className='label'>&copy; 2020 PT. SiCepat Ekspres Indonesia. All rights reserved.</p>
                </Col>
            </Row>                    
        </Container>        
    </div>        
    </>    
  );
};

export default Footer;
