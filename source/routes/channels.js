const express = require("express");
const Channel = require("../controllers/Channels");

const router = express.Router();

router.get('/channels', Channel.get);
router.get('/channels/:id', Channel.getOne);
router.put('/channels/:id', Channel.update);
router.delete('/channels/:id', Channel.delete);
router.post('/channels', Channel.add);

module.exports = router;
