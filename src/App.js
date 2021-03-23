import './App.css';
import { Button } from '@material-ui/core';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } 
from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import HowItWorks from './components/pages/HowItWorks/HowItWorks';
import Contact from './components/pages/Contact/Contact';
import Download from './components/pages/Download/Download';





function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/HowItWorks' component={HowItWorks}/>
        <Route path='/Contact' component={Contact}/>
        <Route path='/Download' component={Download}/>
      </Switch>
    </Router>
  );
}

export default App;
