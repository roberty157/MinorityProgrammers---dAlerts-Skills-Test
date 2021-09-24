import * as React from 'react';
import {useState} from 'react';
//import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AlertList from './AlertList';
import Box from '@mui/material/Box';

import AlertForm from './AlertForm';
import AlertItem from './AlertItem';
import SearchFilterButton from './SearchFilterButton';
import {Container, Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.css';

const alertListData=[
  {
    "alertid":0,
    "symbol":'sushi',
    "exchange":'pancake swap',
    "alert_price":'$0.62',
    "current_price":'$0.60',
    "notification_type":'DISCORD',

  },
  {
    "alertid":1,
    "symbol":'inv',
    "exchange":'sushi swap',
    "alert_price":'$0.71',
    "current_price":'$1.03',
    "notification_type":'WEB',

  },
  {
    "alertid":2,
    "symbol":'pickle',
    "exchange":'quick swap',
    "alert_price":'$1.41',
    "current_price":'$1.35',
    "notification_type":'TWITTER',
  },
]

export default function SearchButtonGroup() {
  const [search, setSearch] = useState('');
  const handleInputChange=(event)=>{
    const {value} = event.target;
    setSearch(value);
    console.log(search);
  }
  const [filter,setFilter] = useState("null");

  

  const [modalShow, setModalShow] = React.useState(false);

 

  return (
    
  <Container style={{width:'100%'}}>
  <Row style={{alignItems:'center'}}>
    <Col style={{fontSize:'12px', color:'white'}}>
      <SearchFilterButton name={'SYMBOL'} current={filter} changeCurrent ={()=>setFilter('SYMBOL')}></SearchFilterButton>
    </Col>
    <Col style={{fontSize:'12px', color:'white'}}>
      
      <SearchFilterButton name={'EXCHANGE'} current={filter} changeCurrent={()=>{setFilter('EXCHANGE')}}></SearchFilterButton>
    </Col>
    <Col style={{fontSize:'12px', color:'white'}}>
      
      <SearchFilterButton name={'ALERT PRICE'} current={filter} changeCurrent={()=>{setFilter('ALERT PRICE')}}></SearchFilterButton>
    </Col>
    <Col style={{fontSize:'12px', color:'white'}}>
      
      <SearchFilterButton name={'CURRENT PRICE'} current={filter} changeCurrent={()=>{setFilter('CURRENT PRICE')}}></SearchFilterButton>
    </Col>
    <Col style={{fontSize:'12px', color:'white'}}>
      
      <SearchFilterButton name={'NOTIFICATION TYPE'} current={filter} changeCurrent={()=>{setFilter('NOTIFICATION TYPE')}}></SearchFilterButton>
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
      <div class="form-outline"  style={{width:'96%',backgroundColor: '#1F2231',borderRadius:'10px', paddingLeft:'0px',marginLeft:'0px', color:'white'}}>
        <input value={search} onChange={handleInputChange} type="search" placeholder="SEARCH FOR TOKEN SYMBOL,EXCHANGE NAME, OR NOTIFICATION TYPE" id="form1" class="form-control" style={{backgroundColor:'#1F2231',borderColor:'#1F2231', fontSize:'12px', color:'white'}}/>
        
      </div>
                        
    </div>
  </Row>
  {
    alertListData.map((el,index)=>(
      <AlertItem symbol={el.symbol} exchange={el.exchange} alert_price={el.alert_price} current_price={el.current_price} notification_type={el.notification_type} index={index} key={index}></AlertItem>
    ))
  }

  
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

