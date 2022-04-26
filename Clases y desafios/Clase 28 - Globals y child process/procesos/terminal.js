process.stdout.write("Hola desde el programa \n");
process.stdout.write("Cual es tu nombre?: ");

process.stdin.on('data',data=>{
    console.log('mucho gusto ', data.toString())
    process.exit();
})