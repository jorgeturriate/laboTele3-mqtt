const mqtt = require('mqtt');
const client  = mqtt.connect('mqtt://your_ip_address_of_pc');

const MIN= 10;
const MAX= 40;

client.on('connect', function () {
    setInterval(function() {
        client.publish('temperatura', Math.floor(Math.random()*(MAX-MIN+1)+MIN));
        console.log('New Temperature');
    }, 5000);
});