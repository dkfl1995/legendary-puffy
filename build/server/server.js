'use strict';

var http = require('http');

var nedb = require('nedb');

/*making database users
initiating db variable and loading database for nodejs environment for ability to make operation with it*/

var db = new nedb({ filename: 'users' });
db.loadDatabase();

//opening server:port to listen to requests (req) for push into and get out user.info.object with http and XMLHR libs...
//can to be expanded db by using more than one user file... if neccesary
var server = new http.createServer(function (request, response) {

    var data = '';
    request.on('data', function (chunk) {
        console.log(data += chunk);
    }).on('end', function (data) {
        db.insert(data, error);
    });
}).listen(5050);
console.log("Server had runned and listening");
//# sourceMappingURL=server.js.map
