// USER CONTROLLER

const { Request, Response, NextFunction } = require('express');
const {db} = require('../db');

const User = new BasicController(db.Users);
module.exports = User;
