"use strict";Object.defineProperty(exports, "__esModule", {value: true});exports. default = (req, res, next) => {
    const { method, url } = req;

    const logLabel = `[${method.toUpperCase()} ${url}]`;
    console.log(logLabel);

    return next();
};