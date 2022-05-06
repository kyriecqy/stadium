const express = require('express')
const db = require('../db')

const router = express.Router()

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')

const config = require('../config')




module.exports = router