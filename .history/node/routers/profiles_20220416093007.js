const express = require('express')
const db = require('../db')

const router = express.Router()

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')

const config = require('../config')

//添加信息接口
router.post('/add', (req, res) => {
  const profileFields = {
    type: '',
    date: '',
    describe: '',
    income: '',
    expend: '',
    cash: '',
    remark: ''
  }
  if(req.body.type) profileFields.type = req.body.type
  if(req.body.date) profileFields.date = req.body.date
  if(req.body.describe) profileFields.describe = req.body.describe
  if(req.body.income) profileFields.income = req.body.income
  if(req.body.expend) profileFields.expend = req.body.expend
  if(req.body.cash) profileFields.cash = req.body.cash
  if(req.body.remark) profileFields.remark = req.body.remark

  const sqlStr = `insert into profiles set ?`

  db.query(sqlStr, profileFields, (err, result) => {
    if(err) return res.send({status: 1, msg: err})

    res.send({status: 0, msg: '添加数据成功'})
  })
})

//获取所有信息
router.get('/', (req, res) => {
  const sqlStr = `select * from profiles`

  db.query(sqlStr,(err, result) => {
    if(err) return res.send({status: 1, msg: err})

    res.send(result)
  })
})


module.exports = router