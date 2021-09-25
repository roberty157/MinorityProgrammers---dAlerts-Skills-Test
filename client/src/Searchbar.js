//dynamic search bar
//https://www.geeksforgeeks.org/how-to-create-dynamic-search-box-in-reactjs/
import * as React from 'react';
import {useState} from 'react';

import {Container, Row, Col} from 'react-bootstrap';

export default function Searchbar(){
    const [search, setSearch] = useState('');
    const handleInputChange=(event)=>{
        const {value} = event.target;
        setSearch(value);
        console.log(search);
      }
    return(
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
    )
}