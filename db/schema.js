const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        default: "First Name"
    },
    lastName: {
        type: String,
        default: "Last Name"
    },
    email: {
        type: String,
        default: "Default"
    },
    phone: {
        type: Number
    },
    cohort: {
        type: String
    }
})

const User = mongoose.model('User', userSchema)

module.exports = {
    User
}