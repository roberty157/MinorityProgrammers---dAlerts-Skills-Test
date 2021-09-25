import * as React from 'react';
import {useState} from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './AlertForm.css';
import {Container, Row, Col, Form} from 'react-bootstrap';
import {InputGroup, FormControl} from 'react-bootstrap';

import axios from 'axios';
//token address, chain, exchange, target price, above or below, notification type
export default function AlertForm(props) {
    const [alertFormData, setAlertFormData] = useState({token_address:'', blockchain:'', exchange_name:'',alert_price:'', notification_type:'', above_or_below:''})
    const alertListData = props.alertlistdata;

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setAlertFormData({...alertFormData,[name]:value});
        console.log(alertFormData);
    }
    const handleDropdownChange = (event) =>{
        const {name,value} = event.target;
        setAlertFormData({...alertFormData,[name]:value});
        console.log(alertFormData);
    }

    //onClick={props.onHide}
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log('you clicked submit');
        console.log('submit',alertFormData);
        
        console.log(alertListData);
        //let newListData = alertListData;
        //console.log(typeof newListData);
        //console.log(newListData);
        const newAlert={
            alertid:alertListData.length,
            token_address:alertFormData.token_address,
            blockchain:alertFormData.blockchain,
            exchange_name:alertFormData.exchange_name,
            alert_price: alertFormData.alert_price,
            notification_type: alertFormData.notification_type,
            above_or_below: alertFormData.above_or_below,
        }
        /*
        let newListData = []
        for(let i=0;i<alertListData.length;i++){
            newListData.appen
        }
        */
        const newListData = alertListData.push(newAlert);
        console.log(newListData);
        //newListData.append(alertFormData);
        //alertListData.append(alertFormData);
        props.updatelistdata(alertListData);
        axios
            .post("http://localhost:3001/alerts/add", alertFormData)
            .then((res)=>console.log(res.data));

        setAlertFormData({token_address:'', blockchain:'', exchange_name:'',alert_price:'', notification_type:'', above_or_below:''});
        props.onHide();




        return false;

    }
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
                            <Form.Control type="text" name='token_address' value={alertFormData.token_address} onChange={handleInputChange} required style={{backgroundColor:'#161522', borderColor:'#161522', color:"white"}}/>
                        </Form.Group>
                    
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPassword" style={{color:'white'}}>
                            <Form.Label style={{fontSize:'12px'}}>CHAIN</Form.Label>
                            <Form.Select aria-label="Default select example" name="blockchain" onChange={handleDropdownChange} style={{backgroundColor:'#161522', borderColor:'#161522'}}>
                                <option style={{display:'none'}}></option>
                                <option style={{color:'white'}} value="Ethereum">Ethereum</option>
                                <option style={{color:'white'}} value="Polygon">Polygon</option>
                                <option style={{color:'white'}} value="Binance_Smart_Chain">Binance_Smart_Chain</option>
                                <option style={{color:'white'}} value="Harmony">Harmony</option>
                                <option style={{color:'white'}} value="Solana">Solana</option>
                                <option style={{color:'white'}} value="Algorand">Algorand</option>
                                <option style={{color:'white'}} value="Stellar">Stellar</option>
                                <option style={{color:'white'}} value="NEAR">NEAR</option>
                                <option style={{color:'white'}} value="IBM_Blockchain">IBM_Blockchain</option>
                                <option style={{color:'white'}} value="Hyperledger_Fabric">Hyperledger_Fabric</option>
                                <option style={{color:'white'}} value="Tezos">Tezos</option>
                                <option style={{color:'white'}} value="EOSIO">EOSIO</option>
                                <option style={{color:'white'}} value="Waves">Waves</option>
                                <option style={{color:'white'}}value="Ripple">Ripple</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label style={{fontSize:'12px', color:'white'}}>EXCHANGE</Form.Label>
                            <Form.Select onChange={handleDropdownChange} aria-label="Default select example" name="exchange_name" style={{backgroundColor:'#161522', borderColor:'#161522'}}>
                                <option style={{display:'none'}}></option>
                                <option value="Uniswap">Uniswap</option>
                                <option value="Quickswap">Quickswap</option>
                                <option value="Sushiswap">Sushiswap</option>
                            </Form.Select>
                        </Form.Group>
                    
                    </Row>
                    <Row>
                        <Form.Group  as={Col} xs={9} className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{fontSize:'12px', color:'white'}}>TARGET PRICE</Form.Label>
                            <Form.Control type="text" name="alert_price" value={alertFormData.alert_price} onChange={handleInputChange} style={{backgroundColor:'#161522', borderColor:'#161522', color:'white'}}/>

                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label style={{fontSize:'12px', color:'white'}}>ABOVE OR BELOW</Form.Label>
                            <Form.Select onChange={handleDropdownChange} name="above_or_below"aria-label="Default select example" style={{backgroundColor:'#161522', borderColor:'#161522'}}>
                                <option style={{display:'none'}}></option>
                                <option value="above">Above</option>
                                <option value="below">Below</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label style={{fontSize:'12px', color:'white'}}>NOTIFICATION TYPE</Form.Label>
                            <Form.Select onChange={handleDropdownChange} name="notification_type" aria-label="Default select example" style={{backgroundColor:'#161522', borderColor:'#161522'}}>
                                <option style={{display:'none'}}></option>
                                <option value="Discord">Discord</option>
                                <option value="Twitter">Twitter</option>
                                <option value="Web">Web</option>
                                <option value="Telegram">Telegram</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleSubmit} style={{width:'100%', backgroundColor:'#149868', borderColor:'#149868'}} >Submit</Button>
            </Modal.Footer>
        
        
      </Modal>
    );
  }