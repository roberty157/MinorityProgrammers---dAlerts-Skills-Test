import * as React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

import {BrowserRouter as  Router,Link, Route} from 'react-router-dom';

export default function AlertItem({symbol,exchange, alert_price, current_price, notification_type,index}){
    const color=(index%2===0? '#1F2231': 'black');
    const buttonColor = (index%2===0? 'black':'#1F2231');

    const url = `/alerts/${index}`;
    return(
    <Link to={url}>
      <Row style={{backgroundColor:color, paddingTop:'20px', paddingBottom:'20px', borderRadius:'10px', marginBottom:'20px', alignItems:'center'}}>
        <Col style={{fontSize:'12px', color:'white'}}>{symbol}</Col>
        <Col style={{fontSize:'12px', color:'white'}}>{exchange}</Col>
        <Col style={{fontSize:'12px', color:'white'}}>{alert_price}</Col>
        <Col style={{fontSize:'12px', color:'white'}}>{current_price}</Col>
        <Col style={{fontSize:'12px', color:'white'}}>{notification_type}</Col>
        <Col style={{fontSize:'12px', color:'white'}}>
            <Button style={{borderColor:buttonColor,backgroundColor:buttonColor,fontSize:'12px',color:'white'}}>CANCEL</Button>
        </Col>
      </Row>
    </Link>
    
    

)
    
}


/*
<Row style={{backgroundColor:'#1F2231', paddingTop:'20px', paddingBottom:'20px', borderRadius:'10px', marginBottom:'20px', alignItems:'center'}}>
    <Col style={{fontSize:'12px', color:'white'}}>sushi</Col>
    <Col style={{fontSize:'12px', color:'white'}}>pancake swap</Col>
    <Col style={{fontSize:'12px', color:'white'}}>$0.62</Col>
    <Col style={{fontSize:'12px', color:'white'}}>$0.60</Col>
    <Col style={{fontSize:'12px', color:'white'}}>DISCORD</Col>
    <Col style={{fontSize:'12px', color:'white'}}>
      <Button style={{borderColor:'black',backgroundColor:'black',fontSize:'12px',color:'white'}}>CANCEL</Button>
    </Col>
  </Row>
  <Row>
    <Col style={{fontSize:'12px', color:'white'}}>INV</Col>
    <Col style={{fontSize:'12px', color:'white'}}>sushi swap</Col>
    <Col style={{fontSize:'12px', color:'white'}}>$0.71</Col>
    <Col style={{fontSize:'12px', color:'white'}}>$1.03</Col>
    <Col style={{fontSize:'12px', color:'white'}}>WEB</Col>
    <Col style={{fontSize:'12px', color:'white'}}>
      <Button style={{borderColor:'#1F2231',backgroundColor:'#1F2231',fontSize:'12px',color:'white'}}>CANCEL</Button>
    </Col>
  </Row>


*/
