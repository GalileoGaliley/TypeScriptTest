require('dotenv').config();

const http = require('http');


const models = require('./models/models');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const sequelize = require('./db.js');
const express = require('express');

const router = require('./routes/index.js');
const path = require('path');
const errorHandler = require('./middleware/ErrorHandlingMeddleware.js')

const PORT = process.env.PORT || 5000;


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname,'staticImages')));
app.use(fileUpload({}));
app.use('/api', router);

app.use(errorHandler);


const start = async ()=>{
  try {
    await sequelize.authenticate();
    await sequelize.sync;

    let httpsCreateServer = http.createServer(app);

    httpsCreateServer.listen(PORT, () => console.log(`Server run on port ${PORT}`.magenta));
  } catch (err) {
    console.log('ERRORRRRRR')
    console.log(err);
  }
}

start();
