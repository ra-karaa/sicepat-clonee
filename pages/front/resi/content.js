import Head from "next/head";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const content = () => {  
      const [resi, setResi] = useState('');
      const [errorVisible, setErrorVisible] = useState(true);
      const [pesanError, setPesanError] = useState('');

      useEffect(()=>{
        hideError()
      }, []);

      const handleInputChange = (event) => {
        setResi(event.target.value);
      }

      const handleButtonClick = () => {        
        checkApi(resi);
        setResi('');
      };

      const hideError = () => {
        setErrorVisible(false);
      };

      const checkApi = async (resi) => {
        const url = 'https://content-main-api-production.sicepat.com/public/check-awb/' + resi;
        const response  = await fetch(url);
        const jsonData = await response.json();
        if(jsonData.message == 'Apitrek: Request failed with status code 400'){
            setPesanError('Maaf No Resi Tidak di Temukan');
            setErrorVisible(true);
        }
      }          

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
        <div className="content-section">
            <Container className="mt-5 mb-5">
                <Row>                
                    <Col md={12} className="text-center">
                        <h2 className="section-title">Cek Resi</h2>                    
                    </Col>                            
                </Row>
                <Row className="justify-content-center mt-2">
                    <Col md={6} className="text-center">
                        <div className="input-group">
                            <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Masukan No Resi"
                            value={resi}
                            onChange={handleInputChange}/>
                        </div>
                        <div className="text-center mt-3">
                            <Button 
                            onClick={handleButtonClick}
                            className="btn-md btn-danger">
                                Lacak
                            </Button>
                        </div>
                    </Col>
                </Row>   
                {errorVisible && (
                <Row className="justify-content-center mt-2">
                    <Col md={6}>                        
                        <div className="card-body bg-danger text-center mt-2 p-2">
                            <span> {pesanError} </span>
                        </div>                        
                    </Col>
                </Row>   
                )}          
            </Container>
        </div>        
        </>
    );
}
export default content;