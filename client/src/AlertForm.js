import * as React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './AlertForm.css';
import {Container, Row, Col, Form} from 'react-bootstrap';
import {InputGroup, FormControl} from 'react-bootstrap';
export default function AlertForm(props) {
    return (
      <Modal 
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        
      >
          
            <Modal.Body style={{color:'#1F2231'}}>
                <Container style={{color:'#1F2231'}}>
                    <Row>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{fontSize:'12px', color:'white'}}>TOKEN ADDRESS</Form.Label>
                            <Form.Control type="email" style={{backgroundColor:'#161522', borderColor:'#161522'}}/>
                        </Form.Group>
                    
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPassword" style={{color:'white'}}>
                            <Form.Label style={{fontSize:'12px'}}>CHAIN</Form.Label>
                            <Form.Select aria-label="Default select example" style={{backgroundColor:'#161522', borderColor:'#161522'}}>
                                <option style={{display:'none'}}></option>
                                <option style={{color:'white'}} value="1">Ethereum</option>
                                <option style={{color:'white'}} value="2">Polygon</option>
                                <option style={{color:'white'}} value="3">Binance_Smart_Chain</option>
                                <option style={{color:'white'}} value="4">Harmony</option>
                                <option style={{color:'white'}} value="5">Solana</option>
                                <option style={{color:'white'}} value="6">Algorand</option>
                                <option style={{color:'white'}} value="7">Stellar</option>
                                <option style={{color:'white'}} value="8">NEAR</option>
                                <option style={{color:'white'}} value="9">IBM_Blockchain</option>
                                <option style={{color:'white'}} value="10">Hyperledger_Fabric</option>
                                <option style={{color:'white'}} value="11">Tezos</option>
                                <option style={{color:'white'}} value="12">EOSIO</option>
                                <option style={{color:'white'}} value="13">Waves</option>
                                <option style={{color:'white'}}value="14">Ripple</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label style={{fontSize:'12px', color:'white'}}>EXCHANGE</Form.Label>
                            <Form.Select aria-label="Default select example" style={{backgroundColor:'#161522', borderColor:'#161522'}}>
                                <option style={{display:'none'}}></option>
                                <option value="1">Uniswap</option>
                                <option value="2">Quickswap</option>
                                <option value="3">Sushiswap</option>
                            </Form.Select>
                        </Form.Group>
                    
                    </Row>
                    <Row>
                        <Form.Group  as={Col} xs={9} className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{fontSize:'12px', color:'white'}}>TARGET PRICE</Form.Label>
                            <Form.Control type="email" style={{backgroundColor:'#161522', borderColor:'#161522'}}/>

                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label style={{fontSize:'12px', color:'white'}}>ABOVE OR BELOW</Form.Label>
                            <Form.Select aria-label="Default select example" style={{backgroundColor:'#161522', borderColor:'#161522'}}>
                                <option style={{display:'none'}}></option>
                                <option value="1">Above</option>
                                <option value="2">Below</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label style={{fontSize:'12px', color:'white'}}>NOTIFICATION TYPE</Form.Label>
                            <Form.Select aria-label="Default select example" style={{backgroundColor:'#161522', borderColor:'#161522'}}>
                                <option style={{display:'none'}}></option>
                                <option style={{color:'white'}} value="1">Discord</option>
                                <option value="2">Twitter</option>
                                <option value="3">Web</option>
                                <option value="4">Telegram</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button style={{width:'100%', backgroundColor:'#149868', borderColor:'#149868'}} onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        
        
      </Modal>
    );
  }