let express = require('express')
let userRouter = express.Router()

userRouter.post('/add-new-user' , (req , res) => {
    console.log('a request has been sent');
})

module.exports = userRouter