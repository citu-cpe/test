const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>This is a project to test the github workflow</h1>');
  res.write('<p>This is to test rebase and merge</p>');
  res.write('<strong>Rebase</strong>');
  res.write('<em>Merge</em>');
  res.end();
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));
