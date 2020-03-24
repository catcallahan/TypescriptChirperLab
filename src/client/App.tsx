import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chirps from "./Chirps";

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    // this.state = {
    //   chirps: []
    // };
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Chirps} />
        </Switch>
      </Router>
    );
  }
}

export interface IAppProps {}

export interface IAppState {
  chirps: Array<{ author: string; chirp: string }>;
}

export default App;

// $.get("/api/chirps")
// .then(res => res.json())
// .then(chirps => this.setState({ chirps }));
