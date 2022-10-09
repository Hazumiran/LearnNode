const express = require('express')

const app = express()

/**
 * Lesson 4 Start
 */
app.get('/weather', (req, res) => {
    // All query string key/value pairs are on req.query
    // res.send(`You provided ${req.query.address} as the address.`)
    // JSON.parse(res.send(req.query.address))
    res.send(
        {
            data: {
                message: 'CREATE NEW USER: POST /user',
                body: req.query.address
            }
        });
})
/**
 * Lesson 4 End
 */

const greeter = (name = 'user', age) => {
    console.log('Hello ' + name)
}
greeter('Andrew') // Will print: Hello Andrew
greeter()

const transaction = (type, { label = 0, stock = 0 } = {}) => {
    console.log(type, label, stock)
}

transaction('order')

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})