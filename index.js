const userInfo = require('./information');


let cowsay = require('cowsay');

console.log(cowsay.say({
    text: `Hi I'm ${userInfo.name} from ${userInfo.campus}`,
    e: '^^',
    T: 'O',
}))