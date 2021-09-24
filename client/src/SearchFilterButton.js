import * as React from 'react';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
export default function SearchFilterButton({name,current,changeCurrent}){
    const buttonColor = (name === current ? '#1F2231':'black')
    return (
        <Button style={{borderColor:'black',backgroundColor:buttonColor,fontsize:'12px',color:'white'}} onClick={changeCurrent}>{name}</Button>
    )
}
//<Button onClick={()=>setFilter('SYMBOL')} style={{borderColor:'black',backgroundColor:buttonColor,fontsize:'12px',color:'white'}}>SYMBOL</Button>
//<Button onClick={()=>setFilter('EXCHANGE')} style={{borderColor:'black',backgroundColor:'black',fontSize:'12px',color:'white'}}>EXCHANGE</Button>
//<Button onClick={()=>setFilter('ALERT PRICE')} style={{borderColor:'black',backgroundColor:'black',fontSize:'12px',color:'white'}}>ALERT PRICE</Button>
//<Button onClick={()=>setFilter('CURRENT PRICE')} style={{borderColor:'black',backgroundColor:'black',fontSize:'12px',color:'white'}}>CURRENT PRICE</Button>
//<Button onClick={()=>setFilter('NOTIFICATION TYPE')} style={{borderColor:'black',backgroundColor:'black',fontSize:'12px',color:'white'}}>NOTIFICATION TYPE</Button>
