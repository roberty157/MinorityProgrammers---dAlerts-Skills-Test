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


//https://www.w3schools.com/howto/howto_js_filter_lists.asp

function sortBy(arr,name,asc){
  const nameToAttribute={
    'SYMBOL':'symbol',
    'EXCHANGE':'exchange',
    'ALERT PRICE':'alert_price',
    'CURRENT PRICE':'current_price',
    'NOTIFICATION TYPE':'notification_type',
    'null':'alertid'
  }

  function compare(a,b){
    if(asc ===true){
      if(a[nameToAttribute[name]] < b[nameToAttribute[name]]){
        return -1;
      }
      if (a[nameToAttribute[name]] < b[nameToAttribute[name]]){
        return 1;
      }
    }else{
      if(a[nameToAttribute[name]] > b[nameToAttribute[name]]){
        return -1;
      }
      if(a[nameToAttribute[name]] > b[nameToAttribute[name]]){
        return 1;
      }
    }
    return 0;
  }
  return arr.sort(compare)
}

const initialAlertListData=[
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

  //if sortDesc is true, then go from high to low, or Z to A
  const [filter,setFilter] = useState("null");
  const [modalShow, setModalShow] = React.useState(false);

  const [alertListData,setAlertListData] = useState(initialAlertListData); 
  const [sortDesc, setSort] = useState(false);

  const toggleSort= ()=>{
    if(sortDesc ===true){
      setSort(false);
      setAlertListData(sortBy(alertListData,filter,true));
    }
    else{
      setSort(true);
      setAlertListData(sortBy(alertListData,filter,false));
    }
    console.log(sortDesc);
  }
  const [search, setSearch] = useState('');
  const handleInputChange=(event)=>{
    const {value} = event.target;
    setSearch(value);
    console.log(search);
  }
  
 

  return (
    
  <Container style={{width:'100%'}}>
  <Row style={{alignItems:'center'}}>
    <Col sx={4} style={{fontSize:'12px', color:'white'}}>
      <SearchFilterButton name={'SYMBOL'} current={filter} changeCurrent ={()=>setFilter('SYMBOL')} changeSort={()=>toggleSort()} ></SearchFilterButton>
    </Col>
    <Col sx={4} style={{fontSize:'12px', color:'white'}}>
      
      <SearchFilterButton name={'EXCHANGE'} current={filter} changeCurrent={()=>{setFilter('EXCHANGE')}} changeSort={()=>toggleSort()}></SearchFilterButton>
    </Col>
    <Col  sx={4} style={{fontSize:'12px', color:'white'}}>
      
      <SearchFilterButton name={'ALERT PRICE'} current={filter} changeCurrent={()=>{setFilter('ALERT PRICE')}} changeSort={()=>toggleSort()}></SearchFilterButton>
    </Col>
    <Col sx={4} style={{fontSize:'12px', color:'white'}}>
      
      <SearchFilterButton name={'CURRENT PRICE'} current={filter} changeCurrent={()=>{setFilter('CURRENT PRICE')} } changeSort={()=>toggleSort()}></SearchFilterButton>
    </Col>
    <Col sx={4} style={{fontSize:'12px', color:'white'}}>
      
      <SearchFilterButton name={'NOTIFICATION TYPE'} current={filter} changeCurrent={()=>{setFilter('NOTIFICATION TYPE')}} changeSort={()=>toggleSort()}></SearchFilterButton>
    </Col>
    <Col  sx={4} style={{fontSize:'12px', color:'white'}}>
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
/*
function compare( a, b ) {
  if ( a.alertid < b.alertid ){
    return -1;
  }
  if ( a.alertid > b.alertid ){
    return 1;
  }
  return 0;
}
*/

/*
function sortBy(arr,attribute){
  function compare(a,b){
    if(a[attribute] < b[attribute]){
      return -1;
    }
    if (a[attribute] < b[attribute]){
      return 1;
    }
    return 0;
  }
  arr.sort(compare)
}
*/
//initialAlertListData.sort(compare);

/*
function sortBy(arr,attribute,asc){
  function compare(a,b){
    if(asc ===true){
      if(a[attribute] < b[attribute]){
        return -1;
      }
      if (a[attribute] < b[attribute]){
        return 1;
      }
    }else{
      if(a[attribute] > b[attribute]){
        return -1;
      }
      if(a[attribute] > b[attribute]){
        return 1;
      }
    }
    return 0;
  }
  return arr.sort(compare)
}
*/
