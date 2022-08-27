const Callback_Func = function() {
    const geocode = (address, callback) => {
        setTimeout(() => {
        const data = {
        latitude: 8,
        longitude: 7
        }
        callback(data)
        }, 2000)
       }
       geocode('Philadelphia', (data) => {
        console.log(data)
       })
} 

module.exports = Callback_Func