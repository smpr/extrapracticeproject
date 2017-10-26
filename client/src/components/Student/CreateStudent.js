import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
const BodyWrapper = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row-wrap;


`
const SignupForm = styled.div`
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
class CreateStudent extends Component {
  state = {
    users: [],
    redirectToUser: false,

  }


  handleChange = (event) => {
    const attribute = event.target.name
    const updateUser = { ...this.state.users }
    updateUser[attribute] = event.target.value
    this.setState({ users: updateUser })
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const res = await axios.post('/api/users', {
      'user': this.state.users
    })
    this.setState({ redirectToUser: true, userId: res.data._id })
  }

  render() {
    if (this.state.redirectToUser) {
      return <Redirect to={`/HomePage`} />
    }

    return (
      <BodyWrapper>
        <SignupForm>
          <h1>Sign-Up</h1>
          <form onSubmit={this.handleSubmit}>
            <table>
              <tr>
                <td><label htmlFor="firstName">First Name</label></td>
                <td><input
                  onChange={this.handleChange} name="firstName"
                  type="text" value={this.state.users.firstName}
                />
                </td>
              </tr>
              <tr>
                <td><label htmlFor="lastName">Last Name</label></td>
                <td> <input onChange={this.handleChange}
                  value={this.state.users.lastName}
                  name="lastName" type="text" /></td>
              </tr>
              <tr>
                <td><label htmlFor="email">Email</label></td>
                <td><input onChange={this.handleChange}
                  value={this.state.users.email}
                  name="Email" type="text" /></td>
              </tr>
              <tr>
                <td><label htmlFor="phone">Phone Number</label></td>
                <td><input
                  onChange={this.handleChange} name="phone"
                  type="number" value={this.state.users.phone}
                /></td>
              </tr>
              <tr>
                <td> <label htmlFor="cohort">Cohort</label></td>
                <td> <input
                  onChange={this.handleChange} name="cohort"
                  type="text" value={this.state.users.cohort}
                /></td>
              </tr>
              <tr>
                <td></td>
                <td><button>Sign Up</button></td>
              </tr>
            </table>
          </form>
        </SignupForm>
      </BodyWrapper >
    )
  }
}

export default CreateStudent
