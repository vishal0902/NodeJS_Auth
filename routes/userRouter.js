const {handleCreateUser} = require('../controllers/userController')
const express = require('express');
const userRouter = express.Router();


userRouter.post('/',handleCreateUser)

module.exports =  {userRouter}