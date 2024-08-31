const http=require('http');

http.createServer((req, res)=>{


    res.writeHead(200,{'Contant-Type':'application/json'})

    const persona={
        id:1,
        nombre:'FErnando'
    }

    res.write(JSON.stringify(persona));
    res.end();
})
.listen(8080);

console.log('Escuchando en el puerto 8080');










