const express = require('express');
const cors = require('cors');

const Database = require('better-sqlite3');
const db = new Database('./src/db/plants.db', {
    verbose: console.log,
});

const server = express();
server.use(cors());
server.use(express.json());
server.set('view engine', 'ejs');

const serverPort = 4000;
server.listen(serverPort, () => {
    console.log(`Server listening at http://localhost:${serverPort}`);
});

