const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.append("Access-Control-Allow-Origin", ['*'])
    res.append("Access-Control-Allow-Headers", ['*'])
    next()
})

app.get('/', (req, res) => {
    res.json({
        name: "Jason",
        age: 23
    })
})

app.post('/', (req, res) => {
    console.log("Post: ", req.body)
    let response = res.json({
        enteredText: req.body.enteredText
    })
    return response.body
})

app.listen(5000, console.log("App is running on port 5000"))