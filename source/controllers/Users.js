// USER CONTROLLER

const { Request, Response, NextFunction } = require('express');
const {db} = require('../db');

const UserController = new BasicController(db.Users);
module.exports = UserController;
