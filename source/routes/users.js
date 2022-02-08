const express = require("express");
const User = require("../controllers/Users");

const router = express.Router();

router.get('/users', User.get);
router.get('/users/:id', User.getOne);
router.put('/users/:id', User.update);
router.delete('/users/:id', User.delete);
router.post('/users', User.add);

module.exports = router;
