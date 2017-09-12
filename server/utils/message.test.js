const expect = require('expect')
const {generateMessage} = require('./message')

describe('generateMessage', () => {

    it('should generate correct message object', () => {
        const from = 'Lucius'
        const text = 'I am King!'
        const message = generateMessage(from, text)

        //expect(message.createdAt).to.be.a('number')
        expect(message).to.include({
            from,
            text
        })


    })

})