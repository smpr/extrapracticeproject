import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

import CreateStudent from './components/Student/CreateStudent'
class App extends Component {
  render() {
    return (<Router>
      <div>
        
        <Switch>
          <Route exact path="/" component={CreateStudent} />
        </Switch>
      </div>
    </Router>);
  }
}

export default App;
