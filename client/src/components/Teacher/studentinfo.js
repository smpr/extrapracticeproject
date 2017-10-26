import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import Nav from '../BoilerPlate/Nav'
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
    const studentId = this.props.match.params.studentId
    //check to see if i actually have the right id....
    console.log(studentId)
    // delete the id from the api
    const res = await axios.delete(`/api/users/${studentId}`)
    //redirect back to the user page after the id has been deleted
    this.setState({ redirectToHome: true })
  }

  render() {
    if (this.state.redirectToHome) {
      return <Redirect to={`/teacher`} />
    }
    return (
      <div>
        <Nav />
        <BodyWrapper>
          <UserBlock>
            <br />
            <h2><b>Student Info</b></h2>
            <br />
            <table>
              <tr>
                <td><b>First Name:</b></td>
                <td>{this.state.user.firstName}</td>
              </tr>
              <tr>
                <td><b>Last Name:</b></td>
                <td>{this.state.user.lastName}</td>
              </tr>
              <tr>
                <td><b>Email:</b></td>
                <td>{this.state.user.email}</td>
              </tr>
              <tr>
                <td><b>Phone:</b></td>
                <td>{this.state.user.phone}</td>
              </tr>
              <tr>
                <td><b>Cohort:</b></td>
                <td>{this.state.user.cohort}</td>
              </tr>
              <tr>
                <td><button onClick={this.deleteUser}>Delete Student</button></td>
                <td><Link to={`/teacher/${this.props.match.params.studentId}/editstudentinfo`}><button>Edit</button></Link></td>
              </tr>
            </table>

          </UserBlock>
        </BodyWrapper>
      </div>
    );
  }
}

export default StudentInfo;