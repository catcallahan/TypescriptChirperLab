import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chirps from "./Chirps";
import HomePage from "./HomePage";


const App : React.FC<IAppProps> = props => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/details/:chirpid" component={ HomePage } />
        <Route exact path="/chirps" component={ Chirps } />
        
      </Switch>
    </Router>
  );
}
  
  


export interface IAppProps {}


export default App;


