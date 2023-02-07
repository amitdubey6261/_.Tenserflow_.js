const express = require('express')

const app = express()
let path = require('path')

app.use(express.static(path.join(__dirname,"Static")));
app.use(express.json())
app.listen(3000)

let users = {}

app.get('/',(req,res)=>{
    res.sendFile('index.html')
})