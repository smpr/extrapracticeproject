import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'
const BodyWrapper = styled.div

class Nav extends Component {
    render() {
        return (
            <div>
                <Link to={`/teacher`}>Home</Link> <Link to={`/teacher/standup`}>Standup Group Maker</Link><Link to={`/teacher/project`}>Project Picker</Link>
            </div>
        );
    }
}

export default Nav;