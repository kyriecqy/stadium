const express = require('express')

const router = express.Router()

router.post('/reguser', (req, res) => {
  res.send({
    data: req.body
  })
})

module.exports = router