const express = require('express');
const router = express.Router()
const { indexHomePage, CreateUser, createIndex, deleteUser, indexDetailUser, updateUser } = require('../controller/homeController')

router.get('/', indexHomePage);
router.post('/create-user', CreateUser);
router.get('/create', createIndex)
router.post('/delete-user/:id', deleteUser); // Thêm route cho chức năng xóa
router.get('/detail-user/:id', indexDetailUser)
router.post('/update-user', updateUser)
module.exports = router;