import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'
const BodyWrapper = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row-wrap;
background-color: rgba(204, 204, 204, .35)
`
const UserBlock = styled.div`
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
class StudentInfo extends Component {
  state = {
    user: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      cohort: '',
    },
    redirectToHome: false
  }

  componentWillMount() {
    this.getThisUser()
  }


  getThisUser = async () => {
    try {
      const res = await axios.get(`/api/users/${this.props.match.params.studentId}`)
      this.setState({ user: res.data })
    } catch (err) {
      console.log(err)
    }
  }
  deleteUser = async () => {
    //pull the user id from params
    const userid = this.props.match.params.studentId
    //check to see if i actually have the right id....
    console.log(userid)
    // delete the id from the api
    const res = await axios.delete(`/api/users/${userid}`)
    //redirect back to the user page after the id has been deleted
    this.setState({ redirectToHome: true })
  }
  handleChange = (event) => {
    //grab whats being changed
    const attribute = event.target.name
    //see whats the new state of being changed

    //set the new user as the old state
    const clonedUser = { ...this.state.user }
    //set attribute )
    //set the old state as the new state
    clonedUser[attribute] = event.target.value
    this.setState({ user: clonedUser })
  }
  editUser = async () => {

    const studentId = this.props.match.params.studentId
    const res = await axios.patch(`/api/users/${studentId}`, {
      user: this.state.user,


    })
    this.setState({ user: res.data, redirectToHome: true })
  }
  render() {
    if (this.state.redirectToHome) {
      return <Redirect to={`/teacher/${this.props.match.params.studentId}/studentinfo`} />
    }
    return (

      <BodyWrapper>
        <UserBlock>
          <br />
          <h2><b>Student Info</b></h2>
          <br />
          <table>
            <tr>
              <td>First Name:</td>
              <td><input onChange={this.handleChange} name="firstName" value={this.state.user.firstName} /></td>
            </tr>
            <tr>
              <td>Last Name:</td>
              <td><input onChange={this.handleChange} name="lastName" value={this.state.user.lastName} /></td>
            </tr>
            <tr>
              <td>Email:</td>
              <td><input onChange={this.handleChange} name="email" value={this.state.user.email} /></td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td><input onChange={this.handleChange} type="number" name="phone" value={this.state.user.phone} /></td>
            </tr>
            <tr>
              <td>Cohort:</td>
              <td><input onChange={this.handleChange} name="cohort" value={this.state.user.cohort} /></td>
            </tr>
            <tr>
              <td></td>
              <td><button onClick={this.editUser}>Edit</button></td>
            </tr>
          </table>
        </UserBlock>
      </BodyWrapper>
    );
  }
}

export default StudentInfo;