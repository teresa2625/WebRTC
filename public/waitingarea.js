'use strict';
var socket = io.connect();

var callbutton = document.getElementById('call');
var caller;
callbutton.onclick = call;

function call(data)
{
	var callername = prompt('Enter your name:');
	if (callername !== '') {
	 	socket.emit('add user', callername);
	 	console.log('User name', callername);
	 	socket.on('redirect', (data) =>{
			window.open('http://localhost:3000?caller=' + callername, "_self");
			// window.location.href = data.direction;
			console.log('data', data);
		});
	}
}
