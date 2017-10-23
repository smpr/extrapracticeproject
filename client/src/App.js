import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

import CreateStudent from './components/Student/CreateStudent'
import HomePage from './components/Student/HomePage'
import TeacherPage from './components/Teacher/TeacherHome'


class App extends Component {
  render() {
    return (<Router>
      <div>
        
        <Switch>
          <Route exact path="/" component={CreateStudent} />
          <Route exact path="/HomePage" component={HomePage} />
          <Route exact path="/Teacher" component={TeacherPage} />

        </Switch>
      </div>
    </Router>);
  }
}

export default App;
