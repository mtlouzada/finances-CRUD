const express = require('express');
const router = express.Router();
const dataController = require("../controllers/datacontroller.js");

router.get('/data', dataController.getAllData);
router.post('/data', dataController.createData);
router.put('/data/:id', dataController.updateData);
router.delete('/data/:id', dataController.deleteData);

module.exports = router;