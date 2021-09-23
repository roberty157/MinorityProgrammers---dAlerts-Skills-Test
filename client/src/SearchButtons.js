import * as React from 'react';
import {useState} from 'react';
//import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AlertList from './AlertList';
import Box from '@mui/material/Box';

import AlertForm from './AlertForm';

import {Container, Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.css';
export default function SearchButtonGroup() {
  const [filter,setFilter] = useState("null");

  const [modalShow, setModalShow] = React.useState(false);

 

  return (
    
  <Container style={{width:'100%'}}>
  <Row style={{alignItems:'center'}}>
    <Col style={{fontSize:'12px', color:'white'}}>
      <Button onClick={()=>setFilter('SYMBOL')} style={{borderColor:'black',backgroundColor:'black',fontsize:'12px',color:'white'}}>SYMBOL</Button>
    </Col>
    <Col style={{fontSize:'12px', color:'white'}}>
      <Button onClick={()=>setFilter('EXCHANGE')} style={{borderColor:'black',backgroundColor:'black',fontSize:'12px',color:'white'}}>EXCHANGE</Button>
    </Col>
    <Col style={{fontSize:'12px', color:'white'}}>
      <Button onClick={()=>setFilter('ALERT PRICE')} style={{borderColor:'black',backgroundColor:'black',fontSize:'12px',color:'white'}}>ALERT PRICE</Button>
    </Col>
    <Col style={{fontSize:'12px', color:'white'}}>
      <Button onClick={()=>setFilter('CURRENT PRICE')} style={{borderColor:'black',backgroundColor:'black',fontSize:'12px',color:'white'}}>CURRENT PRICE</Button>
    </Col>
    <Col style={{fontSize:'12px', color:'white'}}>
      <Button onClick={()=>setFilter('NOTIFICATION TYPE')} style={{borderColor:'black',backgroundColor:'black',fontSize:'12px',color:'white'}}>NOTIFICATION TYPE</Button>
    </Col>
    <Col style={{fontSize:'12px', color:'white'}}>
      <Button style={{borderColor:'black',backgroundColor:'black',fontSize:'12px',color:'white'}} onClick={()=>setModalShow(true)}>+ New Alert</Button>
      <AlertForm show={modalShow} onHide={() => setModalShow(false)}/>
    </Col>
    
  </Row>
  <hr style={{backgroundColor: '#256EFF'}}></hr>
  <Row style={{marginBottom:'20px'}}>
    <div class="input-group" style={{width:'100%' ,borderRadius:'10px'}}>
      <div class="input-group-btn" style={{width:'4%',marginRight:'0px',paddingRight:'0px'}}>
          <button class="btn btn-default" type="submit" style={{backgroundColor:'#1F2231'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#256EFF" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
          </button>
      </div>
      <div class="form-outline"  style={{width:'96%',backgroundColor: '#1F2231',borderRadius:'10px', paddingLeft:'0px',marginLeft:'0px'}}>
        <input type="search" placeholder="SEARCH FOR TOKEN SYMBOL,EXCHANGE NAME, OR NOTIFICATION TYPE" id="form1" class="form-control" style={{backgroundColor:'#1F2231',borderColor:'#1F2231', fontSize:'12px'}}/>
        
      </div>
                        
    </div>
  </Row>
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
</Container>

      
    
  );
}

/*
<Box>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={() =>setFilter("SYMBOL")}>SYMBOL</Button>
            <Button onClick={() =>setFilter("EXCHANGE")}>EXCHANGE</Button>
            <Button onClick={() =>setFilter("ALERT PRICE")}>Alert Price</Button>
            <Button onClick={() =>setFilter("CURRENT PRICE")}>CURRENT PRICE</Button>
            <Button onClick={() =>setFilter("NOTIFICATION TYPE")}>NOTIFICATION TYPE</Button>
            <Button>New alert</Button>
            </ButtonGroup>
            <AlertList></AlertList>
      </Box>
*/
/*
<Container style={{width:'70%'}}>
        <Row>
          <Col style={{fontSize:'12px', color:'white'}}>SYMBOL</Col>
          <Col style={{fontSize:'12px', color:'white'}}>EXCHANGE</Col>
          <Col style={{fontSize:'12px', color:'white'}}>ALERT PRICE</Col>
          <Col style={{fontSize:'12px', color:'white'}}>CURRENT PRICE</Col>
          <Col style={{fontSize:'12px', color:'white'}}>NOTIFICATION TYPE</Col>
          <Col style={{fontSize:'12px', color:'white'}}>+ New Alert</Col>
        </Row>
        <Row>
          <Col style={{fontSize:'12px', color:'white'}}>sushi</Col>
          <Col style={{fontSize:'12px', color:'white'}}>pancake swap</Col>
          <Col style={{fontSize:'12px', color:'white'}}>$0.62</Col>
          <Col style={{fontSize:'12px', color:'white'}}>$0.60</Col>
          <Col style={{fontSize:'12px', color:'white'}}>DISCORD</Col>
          <Col style={{fontSize:'12px', color:'white'}}>CANCEL</Col>
        </Row>
        <Row>
          <Col>INV</Col>
          <Col>sushi swap</Col>
          <Col>$0.71</Col>
          <Col>$1.03</Col>
          <Col>WEB</Col>
          <Col>CANCEL</Col>
        </Row>
      </Container>
*/

/*
<Container>
      <Row lg={2}>
        <Col style={{fontSize:'12px', color:'white'}}>1 of 2</Col>
        <Col style={{fontSize:'12px', color:'white'}}>2 of 2</Col>
      </Row>
      <Row lg={2}>
        <Col style={{fontSize:'12px', color:'white'}}>1 of 3</Col>
        <Col style={{fontSize:'12px', color:'white'}}>2 of 3</Col>
        <Col style={{fontSize:'12px', color:'white'}}>3 of 3</Col>
      </Row>
  </Container>
*/

