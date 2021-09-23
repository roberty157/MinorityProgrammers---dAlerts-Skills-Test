import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Searchbox from './Searchbox';
import SearchButtonGroup from './SearchButtons'
//import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";


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
        <Navbar/>
        <hr style={{height:'1px',backgroundImage:'linear-gradient(to right, #256EFF,#F84F60)',margin:'0px',padding:'0px'}}></hr>
        <Searchbox/>
      </div>
    
  );
}

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

