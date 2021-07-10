
const createError = require('http-errors');
/*
*  404 NOT FOUND
*/
const notFoundHandler = (req, res, next) =>{
    next(createError(404, 'Your requested content was not find!'));
};

/*
*  error handling
*/
const errorHandler =(req, res,  next) =>{
    
}
module.exports = {errorHandler};