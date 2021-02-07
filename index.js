const http = require("http");
const fs = require("fs");

const server = http.createServer((req, response) => {
  response.writeHead(200, { "content-type": "text/html" });

  // Open file as a readable stream
  fs.createReadStream("index.html").pipe(response);
});

// Host server on http://localhost:3000/
server.listen(3000, () => { 
	console.log("Server is running on http://localhost:3000/"); 
}); 
