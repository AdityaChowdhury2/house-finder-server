const express = require('express');
const app = express();
const applyMiddlewares = require('./middlewares/applyMiddlewares');
const globalErrorHandler = require('./utils/globalErrorHandler');

applyMiddlewares(app);

app.get('/', (_req, res) => {
    res.send('Running...');
})

app.all('*', (req, res, next) => {
    const err = new Error(`Can't find ${req.originalUrl} on this server!`);
    err.status = 404;
    next(err);
});

app.use(globalErrorHandler)

module.exports = app;