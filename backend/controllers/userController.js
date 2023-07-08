const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');


// @desc    register user
// @route   POST /api/user
// @access  Public
const registerUser =  asyncHandler(async(req, res) => {
    const {name, password, email} = req.body;

    if (!name || !password || !email) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // Check if the user exists
    const userExists = await User.findOne({email: email})
    if(userExists) {
        res.status(400)
        throw new Error('User email already exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword 
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    }else{
        res.status(400)
        throw new Error("Invalid user data")
    }
})

// @desc    authenticate a user
// @route   POST /api/login
// @access  Public
const loginUser =  asyncHandler(async(req, res) => {
    res.json({ message: 'login user'})
})

// @desc    get user details
// @route   POST /api/userData
// @access  Private
const userDetails =  asyncHandler(async(req, res) => {
    res.json({ message: 'register details'})
})



module.exports = {
    registerUser,
    loginUser,
    userDetails
}