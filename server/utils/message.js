const generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: new Date().getTime()
    }
}





const generateLocationMessage = (from, latitude, longitude) => {
    const locationURL = `https://www.google.com/maps?=${latitude},${longitude}`

    return {
        from: 'Admin',
        locationURL,
        createdAt: new Date().getTime()
    }

}







module.exports = {
    generateMessage,
    generateLocationMessage
}

