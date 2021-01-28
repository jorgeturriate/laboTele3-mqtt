const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://your_ip_address_of_pc')

client.on('connect', ()=>{
    client.subscribe('temperatura')
})

client.on('message', (topic, message)=> {
    context = message.toString();
    console.log(context)
})