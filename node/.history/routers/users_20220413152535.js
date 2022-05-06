const express = require('express')

const router = express.Router()

router.get('/user', (req, res) => {
  res.send({
    status: 0,
    name: 'cqy',
    age: 20
  })
})

module.exports = router