const express = require('express')

const router = express.Router()

router.post('/reguser', (req, res) => {
  res.send({
    status: 0,
    name: 'cqy',
    age: 20
  })
})

module.exports = router