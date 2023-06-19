const path = require('path')
const express = require('express');
const cookieParser = require('cookie-parser')

const app = express();

const {connectDB} = require('./connectDB');
const {userRouter} =  require('./routes/userRouter');
const {authUser} = require('./middlewares/auth')
require('dotenv').config();


const {PORT, DB_URL} = process.env

//connection to DB
connectDB(DB_URL).then(()=>console.log('DB Connected.'))

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())


//templating engine
app.set('view engine','ejs');

app.get('/', authUser, (req,res)=>{
    
    res.render(path.resolve('views/home'))
})


app.use('/auth', userRouter);




app.listen (PORT, ()=>console.log(`Server started at port ${PORT}`))