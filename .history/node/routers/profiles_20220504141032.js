const express = require('express')
const db = require('../db')

const router = express.Router()

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')

const config = require('../config')

//添加信息
router.post('/add', (req, res) => {
  const profileFields = {
    type: '',
    date: '',
    describe: '',
    income: '',
    expend: '',
    id: ''
  }
  if(req.body.type) profileFields.type = req.body.type
  if(req.body.date) profileFields.date = req.body.date
  if(req.body.describe) profileFields.describe = req.body.describe
  if(req.body.income) profileFields.income = req.body.income
  if(req.body.expend) profileFields.expend = req.body.expend
  if(req.body.id) profileFields.id = req.body.id

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

//获取一条信息
router.get('/:id', (req, res) => {
  const sqlStr = `select * from profiles where id=?`

  db.query(sqlStr, req.params.id, (err, result) => {

    if(err) return res.send({status: 1, msg: err})

    if(result.length !== 1) res.send({status: 1, msg: '数据查询失败'})

    res.send(result)
  })
})

//修改数据
router.post('/update', (req, res) => {
  const profileFields = {
    
  }
  if(req.body.type) profileFields.type = req.body.type
  if(req.body.date) profileFields.date = req.body.date
  if(req.body.describe) profileFields.describe = req.body.describe
  if(req.body.income) profileFields.income = req.body.income
  if(req.body.expend) profileFields.expend = req.body.expend

  const id = req.body.id
  console.log(id);
  const sqlStr = `update profiles set ? where id=?`

  db.query(sqlStr, [profileFields, id], (err, result) => {
    if(err) return res.send({status: 1, msg: err})

    res.send({status: 0, msg: '更新数据成功'})
  })
})

//删除数据
router.post('/delete', (req, res) => {
  const id = req.body.id
  console.log(id);
  const sqlStr = `delete from profiles where id=?`

  db.query(sqlStr, id, (err, result) => {

    if(err) return res.send({status: 1, msg: err})

    if(result.affectedRows !== 1) res.send({status: 1, msg: '删除数据失败'})

    res.send({status: 0, msg: '删除成功'})
  })
})


module.exports = router