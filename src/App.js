import React, { useState } from 'react';
import './App.css';
import Navigation from './Components/navBar/navigation';
import CharactersList from './Components/charactersList/charactersList';
import CommonList from './Components/CommonList.js/commonList';
import CharacterDetails from './Components/characterDetails/characterDetails';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas)

function App() {

  return (
    <div className="App">
      <Router>
        <Navigation />        
          <Switch>
          <Route exact path="/" > 
            <CharactersList />
          </Route>
          <Route path="/episodes" >
            <CommonList filter='episode' page={1}/>
          </Route>
          <Route path="/locations" >
            <CommonList filter='location' page={1} />
          </Route>
          <Route path="details/:name" component={CharacterDetails}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
