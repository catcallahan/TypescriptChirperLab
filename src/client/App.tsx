import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chirps from "./Chirps";
import HomePage from "./HomePage";
import Details from "./Details";


const App : React.FC<IAppProps> = props => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/details/:id" component={ Details } />
        
      </Switch>
    </Router>
  );
}
  
  


export interface IAppProps {}


export default App;


