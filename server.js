//core modules

// req.method GET
//req/url
// fs.readFile GET

//we are trying to do file system,

//process every request, get method, if user request about page server will give about page...

//core modules
 const http = require('http'); //provides server
 const fs = require('fs'); //use this for file transaction
 const path = require ('path');

//we created server
 const server = http.createServer((req, res)=>{
   // res.writeHead(200 , {'Content-Type' : 'text/plain'})
   // res.write("Hello");
   // res.end();
   console.log(`${req.method} request for ${req.url} `);
//if user wants to check page
   if(req.method === 'GET'){
     if(req.url === '/') {
       //in the root directory access public folder, UTF - universal transformation format
       fs.readFile('./public/index.html', 'UTF-8', (err,data)=>{
         //if successful what happens
         if(err) throw err;
         //if everithing is fine we want data
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.end(data);
       })
     } else if(req.url === '/index.html') {
        //in the root directory access public folder, UTF - universal transformation format
        fs.readFile('./public/index.html', 'UTF-8', (err,data)=>{
          //if successful what happens
          if(err) throw err;
          //if everithing is fine we want data
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end(data);
        })
      } else if(req.url === '/about.html') {
         //in the root directory access public folder, UTF - universal transformation format
         fs.readFile('./public/about.html', 'UTF-8', (err,data)=>{
           //if successful what happens
           if(err) throw err;
           //if everithing is fine we want data
           res.writeHead(200, {'Content-Type': 'text/html'});
           res.end(data);
         })
       } else if(req.url === '/contact.html') {
          //in the root directory access public folder, UTF - universal transformation format
          fs.readFile('./public/contact.html', 'UTF-8', (err,data)=>{
            //if successful what happens
            if(err) throw err;
            //if everithing is fine we want data
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
          })
        }
   }//method

 });

 server.listen(3000);
 console.log("running node server at port 3000");
