const express = require("express");
const Schedule = require("../controllers/Schedules");

const router = express.Router();

router.get('/schedule', Schedule.get);
router.get('/schedule/:id', Schedule.getOne);
router.put('/schedule/:id', Schedule.update);
router.delete('/schedule/:id', Schedule.delete);
router.post('/schedule', Schedule.add);

module.exports = router;
