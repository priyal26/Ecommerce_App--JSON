const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.write('<html>');
        res.write('<head> <title> enter message</title></head>');
        res.write('<body><form action ="/message" method = "POST"><input type ="text"name ="message"><button type="submit">send </button></form> </body>');
        res.write('</html>');
        return res.end();

    }

    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head> <title>  My First Page</title></head>');
    res.write('<body><h1> Hello from my node.js server!</h1></body>');
    res.write('</html>');
    res.end();
  

});
  