// SCHEDULE CONTROLLER

const { Request, Response, NextFunction } = require('express');
const {db} = require('../db');

const ScheduleController = new BasicController(db.Users);
module.exports = ScheduleController;
