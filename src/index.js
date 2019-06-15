const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// using variation in middleware to limit what users have access to 
// app.use((req, res, next)=> {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next() 
//     }
//     // console.log(req.method, req.path)
//     // next()
// })


// app.use((req, res, next) => {
//     res.status(503).send("site in maintenance")
//     // next()
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


// without middleware: new request -> run route handler
// with middleware: new request -> do something -> run route handler


// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')


// const myFunction = async () => {
//     const token = jwt.sign({_id: 'abc123'},'thisismynewcourse', {expiresIn: '7 days'})
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }

// myFunction()


// const pet = {
//     name: 'cat'
// }

// pet.toJSON = function () {
//     return {}
// }

// console.log(JSON.stringify(pet))
