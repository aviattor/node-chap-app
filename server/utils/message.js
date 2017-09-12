const moment = require('moment')

const generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: moment().valueOf()
    }
}





const generateLocationMessage = (from, latitude, longitude) => {
    const locationURL = `https://www.google.com/maps?=${latitude},${longitude}`

    return {
        from: 'Admin',
        locationURL,
        createdAt: moment().valueOf()
    }

}







module.exports = {
    generateMessage,
    generateLocationMessage
}

