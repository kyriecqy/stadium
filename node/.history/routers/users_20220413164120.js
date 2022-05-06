const express = require('express')
const db = require('../db')

const router = express.Router()

const bcrypt = require('bcryptjs')

router.post('/reguser', (req, res) => {
  if(!req.body.name || !req.body.password || !req.body.email) {
    return res.send({
      status: 1,
      msg: '请按要求输入信息'
    })
  }

  const sqlStr = `select * from users where email=?`
  
  db.query(sqlStr, req.body.email, (err, result) => {
    //执行sql语句失败
    if(err) return res.send({status: 1, msg: err})

    if(result.length > 0) return res.send({status: 1, msg: '邮箱已被注册'})
    
    //对密码进行加密
    req.body.password = bcrypt.hashSync(req.body.password, 5)

    const sqlStr2 = `insert into users set ?`

    const user = {
      name: req.body.name, 
      password: req.body.password, 
      email: req.body.email
    }

    db.query(sqlStr2, user, (err, results) => {
      if(err) return res.send({ status: 1, msg: err.message})

      if(results.affectedRows !== 1) return res.send({ status: 1, msg: '注册失败,请稍后重试'})

      res.send({status: 0, msg: '注册成功'})
    })

  })
})

module.exports = router