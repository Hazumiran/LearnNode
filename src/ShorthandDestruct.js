const ShorthandDestruct = function () {
    // //shorthand
    //     const name = 'Andrew'
    //     const userAge = 27
    //     const user = {
    //         name: name,
    //         age: userAge,
    //         location: 'Philadelphia'
    //     }
    // //destruct
    //     const name = 'Andrew'
    //     const userAge = 27
    //     const user = {
    //         name,
    //         age: userAge,
    //         location: 'Philadelphia'
    //     }
    //     console.log(user)

    //final result
    const product = {
        label: 'Red notebook',
        price: 3,
        stock: 201,
        salePrice: undefined,
        rating: 4.2
    }
    const transaction = (type, { label, stock }) => {
        console.log(type, label, stock)
    }
    transaction('order', product)


}
module.exports = ShorthandDestruct

