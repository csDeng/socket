var express = require( "express" );
var app = express();
var http = require( "http" );
app.use( express.static( "./public" ) ); // where the web page code goes
var http_server = http.createServer( app ).listen( 3000 );
var IO = require( "socket.io" )( http_server );

IO.on( "connection", function( client ) {
    console.log('connected')
    client.on( 'python-message', function( data ) {
        console.log(data)
    })
    setInterval(()=>{
        IO.emit( 'message', 'hello data from node' );
    },3000)
    client.on('disconnect', ()=> {
        console.log('client is disconnected\r\n')
    });
});



console.log('end----')