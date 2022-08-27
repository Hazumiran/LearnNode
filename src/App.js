const App = function () {

    const index = require('./index.js')
    index()
    const port = process.env.PORT || 3000
    app.listen(port, () => {
        console.log('Server is up on port ' + port)
    })
}
modules.export = App
