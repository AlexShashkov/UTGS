// QUERY CONTROLLER

const { Request, Response, NextFunction } = require('express');
const {db} = require('../db');

const QueryController = new BasicController(db.Users);
module.exports = QueryController;
