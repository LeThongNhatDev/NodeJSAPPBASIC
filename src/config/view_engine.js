const path = require("path");
const express = require('express');

const configViewEngine = (app) => {
    //kết nối tempalte
    app.set('views', './src/views/')
    app.set('view engine', 'ejs')
    //kết nối public 
    app.use(express.static(path.join('./src', 'public')));
}


module.exports = configViewEngine;