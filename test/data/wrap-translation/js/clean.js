'use strict';

var dep_1 = require('xxx/yyy');

var str_0 = 'text 1' + 'text # 2\n' +
  "TEXT 3" + "TEXT # 4\n";

var str_1 = 'текст 1' + 'text № 2\n' +
  "ТЕКСТ 3" + "TEXT № 4\n" +
  "TEXT 3" + "TEXT # 4\n";

//------------------------------------------------------------------------------

var str_4 = obj.foo(
  'текст 1' + 'текст № 2\n' +
  "ТЕКСТ 3" + "ТЕКСТ № 4\n" +
  "TEXT 3" + "TEXT # 4\n"
);

var str_5 = obj.foo('текст 1');

var str_6 = 'текст текст текст';

// В RegExp не оборачиваем...
var regexp = /[A-Za-z0-9А-Яа-я]/;

//------------------------------------------------------------------------------
// В комментариях не оборачиваем...

// var str_6 = 'текст 1';

/*
var str_6 = "текст 1";
*/

/*
 * var str_6 = 'текст 1';
 */