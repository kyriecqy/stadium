const express = require('express')

const router = express.Router()

const jwt = require('jsonwebtoken')
const passport = require('passport')

router.get('/myinfo', (req, res) => {
  
  res.send('ok')
})

module.exports = router