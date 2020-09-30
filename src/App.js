import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom"
import Home from './components/pages/Home';
import About from './components/pages/About';
import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter> 
     <Switch>
     
<Route exact path="/"> 
<Home/>
</Route>
<Route exact path="/about"> 
<About/>
</Route>
     </Switch>

     
     </BrowserRouter>
    </div>
  );
}

export default App;
