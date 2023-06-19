const {User} = require('../models/userModel')
const jwt = require('jsonwebtoken')
const path = require('path')


async function handleCreateUser (req,res) {
    const {name, email, password} = req.body
    console.log(name)

    const token = jwt.sign({email:email},process.env.SECRET)


    const doc = await User.create({name, email, password, token})
    res.cookie ("token", token)
    res.redirect('/')
}


async function handleLoginUser (req,res) {
    
    
    const {email, password} = req.body
    console.log(email, password)
    const doc = await User.findOne({email, password})
    console.log(doc)

    if(!doc) return res.redirect('/auth/login')

    
    const token = jwt.sign({email:email},process.env.SECRET)
    console.log(token)
    doc.token = token
    doc.save()
    res.cookie('token',token)
    res.redirect('/')
    // res.render(path.resolve('views/home'))
}


module.exports = {handleCreateUser,handleLoginUser}