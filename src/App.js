import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./page/Home";
import PonyDetails from "./page/PonyDetails";
import Navbar from "./Component/Navbar";
import SearchDetails from "./Component/SearchDetails";


function App() {

    const[searchText, setSearchText] = useState('');

  return (
    <Router>
        <Navbar navQuery = {setSearchText}/>
      <Switch>
          <Route exact path='/'>
              <Home />
          </Route>
        <Route exact path='/pony'>
            <PonyDetails />
        </Route>
          <Route exact path='/search'>
              <SearchDetails  searchText = {searchText}/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
