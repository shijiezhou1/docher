const express = require('express')
const app = express()
const port = 4000
const name = process.env.name
const food = require("./app/food.json");

app.get('/', (req, res) => {
    res.send(`Hello ${name} ! produce: ${JSON.stringify(food)}`)
})

app.listen(port, () => {
    console.log(`Server Started on Port  ${port}`)
})