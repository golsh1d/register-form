let express = require('express')
let cors = require('cors')
let bodyParser = require('body-parser')
let mysql = require('mysql')
let userRouter = require('./usersRoute')

let app = express()
app.use(cors())
app.use(bodyParser.json())

let sqlConnection = mysql.createConnection({
    host : "localhost",
    user : "root" ,
    password : "",
    database : "registerform"
})


sqlConnection.connect(err => {
    if (err) {
        console.log(err);
    } else {
        console.log('you have connected successfully');
        app.use('/api/users' , userRouter)
        
    }
})

app.listen(3000 , (req ,res) => {
    console.log('runned on 3000 port!');
})