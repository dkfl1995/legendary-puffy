import { request } from 'https';

var NEDB = require('nedb');
var xhttp = new XMLHttpRequest(); 

const db = new NEDB({filename : 'users'});
db.loadDatabase();

