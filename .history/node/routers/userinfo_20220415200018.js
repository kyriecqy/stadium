const express = require('express')

const router = express.Router()

router.get('/myinfo', (req, res) => {
  res.send('ok')
})

module.exports = router