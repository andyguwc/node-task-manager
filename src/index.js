const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT


// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('please upload a word document'))
//         }

//         cb(undefined, true)
//         // cb(new Error('file must be a pdf'))
//         // cb(undefined, true)
//         // cb(undefined, false)
//     }
// })

// // const errorMiddleware = (req, res, next) => {
// //     throw new Error('from my middleware')
// // }

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({error:error.message})
// }

// )

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const Task = require('./models/task')
// const User = require('./models/user')
// const main = async () => {
//     // const task = await Task.findById('5d0503b37eff8592f806da4d')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     // print tasks associated with users 
//     const user = await User.findById('5d0503a07eff8592f806da4b')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()

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
