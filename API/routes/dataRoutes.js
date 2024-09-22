const express = require('express');
const router = express.Router();
const dataController = require("../controllers/datacontroller.js");

router.get('/delete/:id', dataController.deleteData);
router.get('/data', dataController.readData);
router.get('/criatabela', dataController.createTable);
router.post('/novouser', dataController.createUser);
router.put('/updateuser', dataController.updateData);
// router.delete('/deleteuser', dataController.deleteData);

module.exports = router;