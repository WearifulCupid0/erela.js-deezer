const { Manager } = require('erela.js');
const Deezer = require('../dist');

const manager = new Manager({
    nodes: [{
        host: 'localhost',
        port: 8080
    }],
    send(id, packet) {
        return true;
    },
    plugins: [new Deezer()]
});

manager.init('725067926457155706').search('https://www.deezer.com/playlist/3110429622', null).then(console.log)