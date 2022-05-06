const express = require('express')

const router = express.Router()

const jwt = require('jsonwebtoken')
const passport = require('../passport')

router.get('/myinfo',passport.authenticate('jwt', {session: false}), (req, res) => {
  
  res.send('ok')
})

module.exports = router