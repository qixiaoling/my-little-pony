import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./page/Home";
import PonyDetails from "./Component/PonyDetails";
import Navbar from "./Component/Navbar";
import SearchDetails from "./page/SearchDetails";
import Footer from "./Component/Footer";
import ProductList from "./page/ProductList";
import ProductDetail from "./page/ProductDetail";
import Modal from "./Component/Modal";

function App() {

    const[searchText, setSearchText] = useState('');

  return (
    <Router>
        <Navbar navQuery = {setSearchText}/>
      <Switch>
          <Route exact path='/'>
              <Home />
          </Route>
        <Route exact path='/pony/:id'>
            <PonyDetails />
        </Route>
          <Route exact path='/products'>
              <ProductList />
          </Route>
          <Route exact path='/detail'>
              <ProductDetail />
          </Route>
          <Route exact path='/search'>
              <SearchDetails  searchText = {searchText}/>
          </Route>
      </Switch>
        <Footer />
        <Modal/>
    </Router>
  );
}

export default App;
