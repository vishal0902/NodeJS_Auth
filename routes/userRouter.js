const { handleCreateUser, handleLoginUser } = require('../controllers/userController')
const express = require('express');
const userRouter = express.Router();
const path = require('path')


userRouter.post('/signup', handleCreateUser)
userRouter.post('/login', handleLoginUser)
userRouter.get('/signup', (req, res) => {
    res.render(path.resolve('views/signup'))
})
userRouter.get('/login', (req, res) => {
    res.render(path.resolve('views/login'))
})

userRouter.get('/logout', (req, res) => {
    res.clearCookie('token')
    res.redirect('/auth/login')
})

module.exports = { userRouter }