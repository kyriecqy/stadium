const express = require('express')

const router = express.Router()

const jwt = require('jsonwebtoken')

router.get('/myinfo', (req, res) => {
  res.send({
    status: 0,
    data: req.user
  })
})

module.exports = router