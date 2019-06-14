const mongoose = require('mongoose')
const validator = require('validator')
const bcryt = require('bcryptjs')


const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        trim: true
    }, 

    email: {
        type: String,
        required: true,
        trim: true, 
        lowercase: true, 
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },

    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value<0) {
                throw new Error('age must be a positive number')
            }
        }
    },

    password: {
        type: String,
        trim: true, 
        required: true,
        minlength: 7,
        validate(value) {
            if(value.includes('password')) {
                throw new Error('password cannot contain password')
            }
        }
    }
})

userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcryt.hash(user.password,8)
    }

    console.log('just before saving')
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User