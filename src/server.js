const express = require('express');
const configViewEngine = require('./config/view_engine');
const WebRouter = require('./route/web');
require('dotenv').config();
const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;


//ket nối viewengine vs public file
configViewEngine(app);
//kết nối router
app.use('/', WebRouter);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})