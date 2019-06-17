const jwt = require('jsonwebtoken')
// const app = require('../src/app')
const User = require('../../src/models/user')
const mongoose = require('mongoose')
const Task = require('../../src/models/task')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: 'Mike',
    email: 'mike@example.com',
    password: '12345678',
    tokens: [{
        token: jwt.sign({_id: userOneId}, process.env.JWT_SECRET)
    }]
}

const userTwoId = new mongoose.Types.ObjectId()
const userTwo = {
    _id: userTwoId,
    name: 'Alexandra',
    email: 'alexandra@example.com',
    password: '12345678',
    tokens: [{
        token: jwt.sign({_id: userTwoId}, process.env.JWT_SECRET)
    }]
}


const taskOne = {
    _id: new mongoose.Types.ObjectId(),
    description: 'first task',
    completed: false,
    owner: userOneId
}

const taskTwo = {
    _id: new mongoose.Types.ObjectId(),
    description: 'second task',
    completed: true,
    owner: userOneId
}

const taskThree = {
    _id: new mongoose.Types.ObjectId(),
    description: 'third task',
    completed: true,
    owner: userTwoId
}

const setupDatabase = async () => {
     // console.log('before each runs')
     await User.deleteMany()
     await Task.deleteMany()
     await new User(userOne).save()
     await new User(userTwo).save()
     await new Task(taskOne).save()
     await new Task(taskTwo).save()
     await new Task(taskThree).save()
}

module.exports = {
    userOne,
    userOneId,
    userTwo,
    userTwoId,
    taskOne,
    taskTwo,
    taskThree,
    setupDatabase
}