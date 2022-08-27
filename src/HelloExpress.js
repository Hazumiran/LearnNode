const HelloExpress = function () {
    const path = require('path')
    const express = require('express')
    const app = express()
    const publicDirectoryPath = path.join(__dirname, '../public')
    const hbs = require('hbs')
    // Other lines hidden for brevity
    const partialsPath = path.join(__dirname, './templates/partials')
    hbs.registerPartials(partialsPath)
    // Other lines hidden for brevity
    const viewsPath = path.join(__dirname, './templates/views')
    app.set('views', viewsPath)
    app.set('view engine', 'hbs')



    app.use(express.static(publicDirectoryPath))

    // app.get('/weather', (req, res) => {
    //     // Provide an object to send as JSON
    //     res.render({
    //         forecast: 'It is snowing',
    //         location: 'Philadelphia'
    //     })
    // })

    app.get('/weather', (req, res) => {
        // All query string key/value pairs are on req.query
        res.send('You provided "' + req.query.address + '" as the address.')
    })


    app.get('', (req, res) => {
        res.render('index', {
            title: 'Hallo',
            name: 'Muchamad Diaz A'
        })
    })

    app.get('*', (req, res) => {
        res.render('404', {
            title: '404',
            name: 'Muchamad Diaz',
            errorMessage: 'Page not found.'
        })
    })


    app.listen(3000, () => {
        console.log('Server is up on port 3000.')
    })
}
module.exports = HelloExpress