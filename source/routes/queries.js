const express = require("express");
const Query = require("../controllers/Queries");

const router = express.Router();

router.get('/query', Query.get);
router.get('/query/:id', Query.getOne);
router.put('/query/:id', Query.update);
router.delete('/query/:id', Query.delete);
router.post('/query', Query.add);

module.exports = router;
