import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const BodyWrapper = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row-wrap;


`
const UserList = styled.div`
border: 2px rgba(138, 134, 132, .75);
box-shadow: 10px 10px 5px #888888;
border-radius: 10px;
width: 400px;
height: 275px;
margin: 100px auto;
padding: 10px;
background-color: rgba(58, 69, 215, .45);
text-align: center;
`
class TeacherHome extends Component {
  // This sets the initial state for the component. 
  state = {
    users: [{
      firstName: '',
      lastName: ''
    }]
  }

 
  componentWillMount () {
    this.getAllUsers()
  }


  getAllUsers = async () => {
    try {
      const res = await axios.get('/api/users')
      this.setState({users: res.data})
    } catch (err) {
      console.log(err)
    }
  }

  render () {
    return (
      <BodyWrapper>
        
        <UserList><b>User List:</b> <br/>{this.state.users.map(user => {
          return (<Link key={user._id} to={`/user/${user._id}/newslist`}>{user.firstName} {user.lastName}<br /></Link>)
        })}
        </UserList>
        
      </BodyWrapper>
    )
  }
}

export default TeacherHome