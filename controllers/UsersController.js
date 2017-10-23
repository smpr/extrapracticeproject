const express = require('express')
const { User } = require('../db/schema')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const users = await User.find({})
    res.json(users)
  } catch (err) {
    res.send(err)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    res.json(user)
  } catch (err) {
    res.send(err)
  }
})
router.patch('/:id', async (req,res)=>{
  const updatedUser = req.body.user
  const user = await User.findById(req.params.id)
  user.firstName = updatedUser.firstName
  user.lastName = updatedUser.lastName
  user.email = updatedUser.email
  const saved = await user.save()
  res.json(saved)
})
router.delete('/:id', async (req, res) => {
  const user = await User.findById(req.params.id)
  user.remove()
  const saved = await user.save()
  res.json(saved)
})

router.post('/', async (req, res) => {
  try {
    const newUser = new User(req.body.user)
    const saved = await newUser.save()
    res.json(saved)
  } catch (err) {
    res.send(err)
  }
})



module.exports = router;