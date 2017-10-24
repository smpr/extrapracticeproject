import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import Nav from '../BoilerPlate/Nav'
class StandUp extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Nav />
                    <div>
                        StandUp
                </div>

                </div>
            </Router>
        );
    }
}

export default StandUp;