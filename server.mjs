console.log("Server Mjs running");

// const express = require('express')// The require keyword in this line of code is of old JS that's why iw ont work on express or mjs 
import express from 'express';
import path from 'path';
const app = express()
const port = 3000

app.get('/abc', (req, res) => {

    console.log("Request ip: ",req.ip);
  res.send('Hello World!')
})
const __dirname = path.resolve()

app.use('/', express.static(path.join(__dirname,'./web/build')))

app.use('*', express.static(path.join(__dirname,'./web/build/index.html')))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})