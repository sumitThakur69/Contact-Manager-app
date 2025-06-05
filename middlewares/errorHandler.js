import { constants } from "../constants.js";
//const { constants } = require('../constants.js');
export const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500; // Internal Server Error
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.status(constants.VALIDATION_ERROR);
            res.json({
                title: "Validation Error",
                message: err.message,
                stacktrace: err.stack
            });
            break;
        case constants.NOT_FOUND:
            res.status(constants.NOT_FOUND);
            res.json({
                title: "Not Found",
                message: err.message,
                stacktrace: err.stack,
            });
            break;
        case constants.UNAUTHORIZED:
            res.status(constants.UNAUTHORIZED);
            res.json({
                title: "Unauthorized",
                message: err.message,
                stacktrace: err.stack,
            });
            break;
        case constants.FORBIDDEN:
            res.status(constants.FORBIDDEN);
            res.json({
                title: "Forbidden",
                message: err.message,
                stacktrace: err.stack,
            });
            default:
                console.log("No Error, Everything is fine");
                res.status(statusCode);
            break;
        }
    };
