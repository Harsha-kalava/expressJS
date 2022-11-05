const express = require('express')

const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended:true}))

app.use('/add-products',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><label for="title">Add Product - </label><input type="text" name="title"><br><label for="quantity">Quantity -  </label><input type="text" name="quantity"><br><button type="sbumit">Submit</button></form>')
})

app.use('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})

app.use('/',(req,res,next)=>{
    res.send('<h1>Hello server</h1>') 
})



app.listen(3000)