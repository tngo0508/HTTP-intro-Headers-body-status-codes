const http = require("http");

const todos = [
  { id: 1, text: "Todo One" },
  { id: 1, text: "Todo One" },
  { id: 1, text: "Todo Three" },
];

const server = http.createServer((req, res) => {
  res.writeHead(400, {
    "Content-type": "application/json",
    "X-Powered-By": "Node.js",
  });
  res.end(
    JSON.stringify({
      success: true,
      error: "Please add email",
      data: null,
    })
  );
});
const PORT = 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
