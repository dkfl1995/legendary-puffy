'use strict';

var _nedb = require('nedb');

var _nedb2 = _interopRequireDefault(_nedb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = new _nedb2.default({ filename: 'users' });
db.loadDatabase();
//# sourceMappingURL=tempCodeRunnerFile.js.map
