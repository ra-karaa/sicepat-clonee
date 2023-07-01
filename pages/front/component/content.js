import React from "react";
import Head from "next/head";
import { Container, Row, Col, Card } from "react-bootstrap";

const ContentSection = () => {

   const contentCard = [

        {
            id : 1, 
            img : "https://www.sicepat.com/images/service/sicepat-siuntung.png",
            title : "SIUNTUNG",
            desc : "Layanan Pengiriman Cepat Yang Murah Dengan Harga Regular", 
            link : "/"        
        },
        {
            id : 2, 
            img : "https://www.sicepat.com/images/service/sicepat-best.png",
            title : "BEST",
            desc : "Besok Sampai Tujuan", 
            link : "/"        
        },
        {
            id : 3, 
            img : "https://www.sicepat.com/images/service/sicepat-halu.png",
            title : "HALU",
            desc : "Harga Mulai Lima Ribu", 
            link : "/"        
        }, 
        {
            id : 4, 
            img : "https://www.sicepat.com/images/service/sicepat-gokil.png",
            title : "GOKIL",
            desc : "Cargo Kilat - Layanan Pengiriman Barang Dalam Jumlah Banyak/Ukuran Yang Lebih Besar", 
            link : "/"        
        }, 
        {
            id : 5, 
            img : "https://www.sicepat.com/images/service/sicepat-h3lo.png",
            title : "H3LO",
            desc : "Heboh 3 Kilo – Kirim barang 3,3kg Bayar 2kg", 
            link : "/"        
        }, 
        {
            id : 6, 
            img : "https://www.sicepat.com/images/service/sicepat-go.png",
            title : "SICEPAT GO!",
            desc : "Layanan paket internasional ke seluruh mancanegara", 
            link : "/"        
        }, 
        
   ];

  return (
    <>
      <Head>
        <style>{`    
        body{
            background-color: #fff;            
        }     
        .section-title{                            
            font-family: 'Roboto', sans-serif;
            font-weight: bold;
            color: #000 !important;              
        }
        .content-section {
            background-color: #f8f9fa;
            padding: 80px 0;
        }        
        .section-description {
            margin-bottom: 20px;
            font-weight: bold;
            color : #000;
            font-size : 13px;
        }
        .section-description-child {
            margin-bottom: 20px;                        
            font-size : 12px;
        }
        .section-image {
            width: 100%;
            max-height: 300px;
            object-fit: cover;
        }
        .icon{
            margin-bottom: 10px;
        }            
        .card-content{       
            margin-left:15px;
            margin-right: 15px;     
            box-shadow: 0 1px 5px 0 hsla(0,0%,77%,.15);
            border: 0.5px solid #dcdcdc;
            background-color: #fff;
            font-size: 14px;
            font-weight: 400;
            font-stretch: normal;
            font-style: normal;
            letter-spacing: normal;
            text-align: center;
            color: #333;
            flex-basis: 30%;
            margin-bottom: 4rem;
            height: 610px !important;          
        }      
        .service-card_mh10em__LIiZK {
            min-height: 10em;
          }
        
        .image-container {
            margin-top: 40px;
            position: relative;
            align-items : center;
            margin-bottom : 50px;
            height:100px;
        }
        
        .image-svg {
        max-height: 8em;
        max-width: 16em;
        width: 100%;
        height: 100%;
        object-fit: contain;
        }
        `}</style>
      </Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap"
        rel="stylesheet"
      />
      <div className="content-section">
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <h2 className="section-title">Produk & Layanan</h2>
              <p className="section-description">
                Pilih Layanan Pengiriman Yang Tepat di Waktu Yang Tepat.
              </p>
            </Col>                            
                {
                    contentCard.map((content, key) => 
                    <Col md={4} className="mt-5">
                        <Card
                            className="p-2 card-content align-items-center">
                            <Row key={key} className="postion-relative justify-content-center text-center">
                            <Col md={10} className="service-card_mh10em__LIiZK">
                            <div className="image-container">
                                <img
                                    className="image-svg"
                                    src={content.img}
                                />
                                </div>                    
                            </Col>
                            <Col md={10}>
                                <h4 className="section-title">{content.title}</h4>
                                <p className="section-description">
                                    {content.desc}
                                </p>
                            </Col>
                            <Col md={10}>
                                <img
                                src="https://www.sicepat.com/images/icon/cart.svg"
                                className="icon"
                                />
                                <p className="section-description-child">
                                Pilih layanan SIUNTUNG dengan harga regular tanpa biaya
                                tambahan
                                </p>
                            </Col>
                            <Col md={10}>
                                <img
                                src="https://www.sicepat.com/images/icon/time.svg"
                                className="icon"
                                />
                                <p className="section-description-child">
                                15 Jam – Sesuai ETA
                                </p>
                            </Col>
                            <Col md={10}>
                                <img
                                src="https://www.sicepat.com/images/icon/location.svg"
                                className="icon"
                                />
                                <p className="section-description-child">
                                Seluruh Indonesia (15 Jam - Khusus Wilayah Jabodetabek dan
                                Bandung)
                                </p>
                            </Col>
                            </Row>
                        </Card>
                    </Col> 
                )}                                                        
                                
            </Row>                               
        </Container>
      </div>
    </>
  );
};

export default ContentSection;
