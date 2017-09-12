const socket = io()
socket.on('connect',  () => {
    console.log("Connected to server")
})

socket.on('disconnect', () => {
    console.log("Disconnected from server")
})

socket.on('newMessage', (message) => {
    console.log('New Message', message)
})

socket.emit('createMessage', {
    from: 'Frank',
    text: 'Hi'
}, (data) => {
    console.log("Got it", data)
})





new Vue({
    el: "#app",

    data: {
        message: '',
        messages: [],
        notification: '',
        notify: false,
        location: {}
    },

    methods: {
        sendMessage() {
            if (!this.message) {
                return
            }
            console.log("Sending Message...")
            socket.emit('createMessage', {
                from: "User",
                text: this.message

            }, (data) => {
                this.notify = true
                this.notification = data
            })
            this.message = ''
        },
        sendLocation() {
            if (!navigator.geolocation) {
                this.notify = true
                return this.notification = "Geolocation is unavailable"
            }
            this.notify = true
            this.notification = "Getting location..."
            navigator.geolocation.getCurrentPosition((position) => {
                this.notification = "Location retrieved"

                this.location.latitude = position.coords.latitude
                this.location.longitude = position.coords.longitude

                console.log(position)
                socket.emit('createLocationMessage', {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })

                setTimeout(() => {
                    this.notify = false
                }, 3000)


            }, () => {
                this.notify = true
                this.notification = "Unable to fetch location"
                setTimeout(() => {
                    this.notify = false
                }, 3000)
            })

        }
    },
    created() {
        socket.on('newMessage', (message) => {
            console.log('New Message', message)
            this.messages.unshift(message)
        })

        socket.on('newLocationMessage', (message) => {
            this.messages.unshift(message)

        })

    }
})



