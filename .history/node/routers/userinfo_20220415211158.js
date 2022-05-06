const express = require('express')

const router = express.Router()

const jwt = require('jsonwebtoken')

router.get('/myinfo', (req, res) => {
  
  res.send('ok')
})

module.exports = router