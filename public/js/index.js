const socket = io()
socket.on('connect',  () => {
    console.log("Connected to server")

    // socket.emit('createMessage', {
    //     to: 'Sinna',
    //     text: "Yup. That works for me"
    // })
})

socket.on('disconnect', () => {
    console.log("Disconnected from server")
})

socket.on('newMessage', (message) => {
    console.log('New Message', message)
})


