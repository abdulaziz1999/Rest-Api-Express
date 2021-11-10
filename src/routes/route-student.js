const router = require('express').Router();
const { student } = require('../controllers');

// GET localhost:8080/students => Ambil data semua student
router.get('/students', student.getDataStudent);

// GET localhost:8080/students/2 => Ambil data semua student berdasarkan id = 2
router.get('/students/:id', student.getDataStudentByID);

// POST localhost:8080/students/add => Tambah data student ke database
router.post('/students/add', student.addDataStudent);

// POST localhost:8080/students/2 => Edit data student
router.post('/students/edit', student.editDataStudent);

// POST localhost:8080/students/delete => Delete data student
router.post('/students/delete/', student.deleteDataStudent);

module.exports = router;