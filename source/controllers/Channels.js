// CHANNEL CONTROLLER

const { Request, Response, NextFunction } = require('express');
const {db} = require('../db');

const ChannelController = new BasicController(db.Users);
module.exports = ChannelController;
