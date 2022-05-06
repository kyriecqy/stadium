const express = require('express')

const app = express()

const db = require('./db/index')

const router = require('./routers/users')

app.use('/api', router)

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`express server running at ${port}`);
})