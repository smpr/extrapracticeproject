require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
mongoose.Promise = global.Promise

const {User} = require('./schema')

const bob = new User({
    firstName: "Bob",
    lastName: "Barker",
    email: "defaultemail@email.com",
    phone: 5555555555,
    cohort: "wdi12"
})
User.remove({})
.then(() => bob.save())
.then(() => console.log('Successful Save'))
.then(() => mongoose.connection.close())