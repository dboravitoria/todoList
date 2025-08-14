const express = require('express')
const path = require('path')
const chalk = require('chalk')
const router = require('./routes')
const port = process.env.PORT || 8000

const app = express()
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.use(router)

app.listen(port, ()=>{
    console.log(chalk.yellow.bold.italic(`Servidor rodando em http://localhost:${port}`))
})