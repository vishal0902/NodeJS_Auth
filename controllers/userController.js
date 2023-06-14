const {User} = require('../models/userModel')
const jwt = require('jsonwebtoken')


async function handleCreateUser (req,res) {
    const {name, email, password} = req.body
    console.log(name)

    const token = jwt.sign({email:email},process.env.SECRET)


    const doc = await User.create({name, email, password, token})
    res.status(201).json(doc)
}
module.exports = {handleCreateUser}