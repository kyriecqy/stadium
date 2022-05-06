const express = require('express')
const db = require('../db')

const router = express.Router()

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')

const config = require('../config')

//注册接口
router.post('/register', (req, res) => {
  console.log(req);
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

//登录接口
router.post('/login', (req, res) => {
  const sqlStr = `select * from users where email=?`
  db.query(sqlStr, req.body.email, (err, result) => {
    //执行sql语句失败
    if(err) return res.send({status: 1, msg: err})

    if(result.length !== 1) return res.send({status: 1, msg: '邮箱不存在或邮箱错误'})
    //拿着用户的密码与数据库中的密码进行校验
    const compareResult = bcrypt.compareSync(req.body.password, result[0].password)

    if(!compareResult) return res.send({status: 1, msg: "密码错误，请重新输入"})

    const user = {...result[0], password: ''}
    //返回token 
    const tokenStr = jwt.sign(user, config.jwtSecretKey, {
      expiresIn: '1h' //token有效期为一小时
    })

    res.send({
      status: 0,
      msg: '登陆成功',
      token: 'Bearer ' + tokenStr
    })

  })
})

module.exports = router