
const http = require('http');

const nedb = require('nedb');  

/*making database users
initiating db variable and loading database for nodejs environment for ability to make operation with it*/ 

const db = new nedb({filename : 'users'});
db.loadDatabase();

//opening server:port to listen to requests (req) for push into and get out user.info.object with http and XMLHR libs...
//can to be expanded db by using more than one user file... if neccesary
const server = new http.createServer(function (request,response) {
    
    let data = '';
    request.on('data', (chunk) => {
        console.log(data += chunk); 
    })
    .on('end', (data) => {
        console.log(data);
    });
}).listen(5050);
console.log("Server had runned and listening");