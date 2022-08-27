
const Greeter = function () {
    const fetch = require('node-fetch');
    const greeter = (name = 'user', age) => {
        console.log('Hello ' + name)
    }
    greeter('Diaz') // Will print: Hello Andrew
    greeter() // Will print: Hello user
    const transaction = (type, { label, stock = 0 } = {}) => {
        console.log(type, label, stock)
    }
    transaction('order')


    fetch('http://localhost:3000/weather?address=Boston').then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                console.log(data.location)
                console.log(data.forecast)
            }
        })
    })

    const weatherForm = document.querySelector('form')
    const search = document.querySelector('input')
    weatherForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const location = search.value
        fetch('http://localhost:3000/weather?address=' +
            location).then((response) => {
                response.json().then((data) => {
                    if (data.error) {
                        console.log(data.error)
                    } else {
                        console.log(data.location)
                        console.log(data.forecast)
                    }
                })
            })
    })

    const messageOne = document.querySelector('#message-1')
    messageOne.textContent = 'My new text'
}

module.exports = Greeter