'use strict';

var _https = require('https');

var NEDB = require('nedb');
var xhttp = new XMLHttpRequest();

var db = new NEDB({ filename: 'users' });
db.loadDatabase();
//# sourceMappingURL=server.js.map
