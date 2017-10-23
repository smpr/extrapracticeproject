import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class CreateStudent extends Component {
  state = {
    users: [],
    redirectToUser: false,
    
  }


  handleChange = (event) => {
    const attribute = event.target.name
    const updateUser = {...this.state.users}
    updateUser[attribute] = event.target.value
    this.setState({users: updateUser})
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const res = await axios.post('/api/users', {
      'user': this.state.users
    })
    this.setState({redirectToUser: true, userId: res.data._id})
  }

  render () {
    if (this.state.redirectToUser) {
      return <Redirect to={`/HomePage`} />
    }

    return (
      <div>
        <h1>Sign-Up</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={this.handleChange} name="firstName"
              type="text" value={this.state.users.firstName}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input onChange={this.handleChange}
              value={this.state.users.lastName}
              name="lastName" type="text" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input onChange={this.handleChange}
              value={this.state.users.email}
              name="Email" type="text" />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              onChange={this.handleChange} name="phone"
              type="number" value={this.state.users.phone}
            />
          </div>
          <div>
            <label htmlFor="cohort">Cohort</label>
            <input
              onChange={this.handleChange} name="cohort"
              type="text" value={this.state.users.cohort}
            />
          </div>
          <button>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default CreateStudent
