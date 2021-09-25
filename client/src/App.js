import logo from './logo.svg';
import './App.css';
import NavBar from './Navbar'
import Searchbox from './Searchbox';
import SearchButtonGroup from './SearchButtons'
//import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import AlertPage from './AlertPage';

import {BrowserRouter as  Router,Link, Route} from 'react-router-dom' 
function App() {
  /*
  const myTheme = createMuiTheme({
    palette:{
      type:"dark"
    },
  });

  <ThemeProvider theme = {myTheme}>
  </ThemeProvider>
  */
  return (
      <div className="App" style={{background:'black'}}>
        <NavBar/>
        
        

        <Route exact path="/" component ={Searchbox}/>
        <Route path="/alerts/:id">
          <AlertPage/>
        </Route>
      </div>
    
  );
}
//<Searchbox/>
export default App;

/*
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/

