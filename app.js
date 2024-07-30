const express = require('express');
const cors = require('cors');

const app = express();
const { dbConnect } = require('./config/mysql');

app.use(express.json());
app.use(cors());
app.use('/api', require(`./routes/`));

const port = process.env.APP_PORT || 3000;

app.listen(port, (req, res) => {
    console.log(`API running on https://localhost:${port}/api`);
});

dbConnect();