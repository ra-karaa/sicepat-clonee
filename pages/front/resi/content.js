import Head from "next/head";
import { Component, useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

class content extends Component{
    constructor(props){
        super(props);
        this.state = {
            errorVisible: false,
            resi: '',  
            pesanError : ''          
        }
    }    
     

    handleInputChange = (event) => {
        this.setState({resi : event.target.value});
    }

    handleButtonClick = () => {        
        this.checkApi(this.state.resi);
        this.setState({resi : ''});
    };

    checkApi = async (resi) => {
        const url = 'https://content-main-api-production.sicepat.com/public/check-awb/' + resi;
        const response  = await fetch(url);
        const jsonData = await response.json();
        if(jsonData.message == 'Apitrek: Request failed with status code 400'){            
            this.setState({errorVisible : true, pesanError : 'Maaf No Resi Tidak Terdaftar'});
        }
      }      
    
    render(){
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
                                value={this.state.resi}
                                onChange={this.handleInputChange}/>
                            </div>
                            <div className="text-center mt-3">
                                <Button 
                                onClick={this.handleButtonClick}
                                className="btn-md btn-danger">
                                    Lacak
                                </Button>
                            </div>
                        </Col>
                    </Row>   
                    {this.state.errorVisible && (
                    <Row key={this.state.errorVisible} className="justify-content-center mt-2">
                        <Col md={6}>                        
                            <div className="card-body bg-danger text-center mt-2 p-2">
                                <span> {this.state.pesanError} </span>
                            </div>                        
                        </Col>
                    </Row>   
                    )}          
                </Container>
            </div>        
            </>
        );
    }
}          
export default content;