const express = require('express');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const openApiConfiguration = require('./docs/swagger');

const app = express();
const { dbConnect } = require('./config/mysql');

const NODE_ENV = process.env.NODE_ENV || 'development';

app.use(express.json());
app.use(cors());

const port = process.env.APP_PORT || 3000;
 
app.use(
    '/documentation',
    swaggerUI.serve,
    swaggerUI.setup(openApiConfiguration)
);

app.use('/api', require(`./routes/`));

if (NODE_ENV !== 'test') {
    app.listen(port);
    dbConnect(); 
}


module.exports = app;