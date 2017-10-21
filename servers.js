// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT = 7000;
var PORT2 = 7500;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {
	if(request.headers.host === "localhost:7500"){
		response.end("you suck " + request.url);
	} else {
		response.end("you are awesome " + request.url);
	}
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server1 = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest);

// Start first server that is listening on port 7000.
server1.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

// Start second server that is listening on port 7500.
server2.listen(PORT2, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT2);
});