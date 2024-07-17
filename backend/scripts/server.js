let express = require('express')
let cors = require('cors')
let bodyParser = require('body-parser')
let userRouter = require('./usersRoute')

let app = express()
app.use(cors())
app.use(bodyParser.json())

app.use('/api/users' , userRouter)

app.listen(3000 , (req ,res) => {
    console.log('runned on 3000 port!');
})