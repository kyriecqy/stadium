const express = require('express')
const db = require('../db')

const router = express.Router()

router.post('/reguser', (req, res) => {
  if(!req.body.name || !req.body.password || !req.body.email) {
    return res.send({
      status: 1,
      msg: '用户名或密码不合法！'
    })
  }

  const sqlStr = `select * from users where email=?`
  
  db.query(sqlStr, req.body.email, (err, result) => {
    //执行sql语句失败
    if(err) return res.send({status: 1, msg: err})

    if(result.length > 0) return res.send({status: 1, msg: '邮箱已被注册'})

    res.send('ok')

  })
})

module.exports = router