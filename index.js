const express = require('express')
const startupDebugger = require('debug')('app:startup')
const dbDebugger = require('debug')('app:db')
const config = require('config')
const app = express()
const morgan = require('morgan')
const genreRoute = require('./routes/genres')
app.use(express.json())
app.use(morgan('tiny'))
app.use('/api/genres', genreRoute)


app.set('view engine', 'pug')
startupDebugger('Startup debugger')
dbDebugger("deb DEbugger")

console.log(config.get('name'))
console.log(config.get('password'))


app.get('/',(req,res)=>{
    res.render('index',{
        message: "hello world"
    })
    })


console.log(app.get("env"))


const port = process.env.PORT || 1337
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})