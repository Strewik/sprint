const express = require('express');
const router = express.Router();
const { registerUser,  loginUser, userDetails } = require('../controllers/userController')

router.post('/api/registerUser', registerUser); 
router.post('/api/login', loginUser); 
router.get('/api/userDetails', userDetails); 


module.exports = router;
