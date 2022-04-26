const {spawn} = require("child_process");

// crear proceso hijo
const child = spawn('find', ['/']);

child.stdout.on('data',data=>{
    console.log(data.toString())
})