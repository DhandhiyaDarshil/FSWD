const http = require('http');
const url = require('url');
const querystring = require('querystring');

const requestHandler = (req, res) => {

  const parsedUrl = url.parse(req.url);
  const queryParams = querystring.parse(parsedUrl.query);

  res.writeHead(200, { 'Content-Type': 'text/plain' });

  res.end(JSON.stringify(queryParams));
};

const server = http.createServer(requestHandler);
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});