import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Searchbox from './Searchbox';
function App() {
  return (
    <div className="App">
      <Navbar/>
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

