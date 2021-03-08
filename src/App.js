import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
              <Navbar></Navbar>
      <header className="App-header">


        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button color="primary">hello</Button>
      </header>
    </div>
  );
}

export default App;
