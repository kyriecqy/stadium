const express = require('express')

const app = express()
//配置解析post请求表单数据中间件
app.use(express.urlencoded({ extended: false }))

const db = require('./db/index')


const router = require('./routers/users')

app.use('/api', router)

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`express server running at ${port}`);
})