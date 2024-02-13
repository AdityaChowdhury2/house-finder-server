// Description: This file is the entry point for the application.
const app = require('./src/app');
const http = require('http');
require('dotenv').config();

const server = http.createServer(app);
const port = process.env.PORT || 3000;

const main = async () => {
    server.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

main();
