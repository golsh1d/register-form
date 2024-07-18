let express = require('express')
let mysql = require('mysql')
let userRouter = express.Router()

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
        userRouter.post('/add-new-user' , (req , res) => {
            console.log('a request has been sent');
            let newUserInfo = req.body
            let newUserQuery = `INSERT INTO users VALUES (NULL ,'${newUserInfo.name}','${newUserInfo.familyName}','${newUserInfo.userName}','${newUserInfo.password}')`
            sqlConnection.query(newUserQuery , (err , result) => {
                if (err) {
                    console.log(err);
                    res.send(JSON.stringify(null))
                } else {
                    res.send(JSON.stringify(true))
                }
            })
        })
        userRouter.get('/get-all-users' , (req , res) => {
            let newSelectQuery = `SELECT * FROM users`
            sqlConnection.query(newSelectQuery , (err , result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send(result)
                }
            })
        })
        userRouter.delete('/delete-user' , (req ,res) => {
            let newUserDelete = req.body
            let newDeleteUserQuery = `DELETE FROM users WHERE id = ${newUserDelete.id}`
            sqlConnection.query(newDeleteUserQuery , (err , result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send(JSON.stringify(true))
                }
            })
        })
        userRouter.post('/get-selected-user-data' , (req , res) => {
            let selectedUserInfo = req.body
            let selectedUserQuery = `SELECT name, familyName, userName, password FROM users WHERE id = ${selectedUserInfo.id}`
            sqlConnection.query(selectedUserQuery , (err , result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send(result)
                }
            })
        })
        userRouter.put('/update-user' , (req , res) => {
            let selectedUserData = req.body
            let selectedUserQuery = `UPDATE users SET name='${selectedUserData.name}',familyName='${selectedUserData.familyName}',userName='${selectedUserData.userName}',password='${selectedUserData.password}' WHERE id = ${selectedUserData.id}`
            sqlConnection.query(selectedUserQuery , (err , result) => {
                if(err) {
                    console.log(err);
                } else {
                    res.send(JSON.stringify(true))
                }
            })
        })
    }
})

module.exports = userRouter