import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

import Header from './components/BoilerPlate/Header'
import CreateStudent from './components/Student/CreateStudent'
import HomePage from './components/Student/HomePage'
import TeacherPage from './components/Teacher/TeacherHome'
import StudentInfo from './components/Teacher/studentinfo'
import EditStudentInfo from './components/Teacher/editstudentinfo'
import StandUp from './components/Teacher/StandUp'
import Project from './components/Teacher/ProjectGenerator'




class App extends Component {
  render() {
    return (<Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={CreateStudent} />
          <Route exact path="/HomePage" component={HomePage} />
          <Route exact path="/Teacher" component={TeacherPage} />
          <Route exact path="/Teacher/standup" component={StandUp} />
          <Route exact path="/Teacher/project" component={Project} />
          <Route exact path="/Teacher/:studentId/studentinfo" component={StudentInfo} />
          <Route exact path="/Teacher/:studentId/editstudentinfo" component={EditStudentInfo} />

        </Switch>
      </div>
    </Router>);
  }
}

export default App;
