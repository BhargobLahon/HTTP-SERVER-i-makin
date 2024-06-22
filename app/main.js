const { Socket } = require("dgram");
const net = require("net");
const conn = new Socket;
// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

// Uncomment this to pass the first stage
const server = net.createServer((socket) => {
  conn.write("HTTP/1.1 200 OK\r\n\r\n");
  conn.on("close", () => {
    conn.end();
    server.close();
  });
});

server.listen(4221, "localhost");
