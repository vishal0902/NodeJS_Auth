const jwt = require('jsonwebtoken')
const path = require('path')

async function authUser(req,res,next) {
    
    try {
        // // console.log(req.headers.authorization)
        // const bearerToken = req.headers.authorization
        // // console.log(bearerToken)
    
        // const token = bearerToken?.split('Bearer ')[1]
        // // console.log(process.env.SECRET)
        // const decodedData = jwt.verify(token, process.env.SECRET)
        // console.log(decodedData)
        // next()

        const token = req.cookies.token;

        const result = jwt.verify(token,process.env.SECRET)

        if(!result) return res.redirect('/auth/login')

        next()

        
    } catch (error) {
        
        return res.redirect('/auth/login')
    }
    
}

module.exports = {authUser}