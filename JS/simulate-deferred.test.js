'use strict'
var deferred = require('./simulate-deferred');
function increment(value){
  console.log(value);
  return value + 1;
}

var d = new Deferred();
d.addCallbacks(increment)
d.addCallbacks(increment)
d.addCallbacks(increment)
d.callback(1)