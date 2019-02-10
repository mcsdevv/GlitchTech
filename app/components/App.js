import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from './shared/GlobalStyle';


import Login from './Login/Login';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
      <GlobalStyle/>
      <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route render={() => <p>Page was not found</p>
            } />
          </Switch>
      </Router>
      </React.Fragment>
    );
  }
}

export default App;
