// https://github.com/mochi/mochikit/blob/master/MochiKit/Async.js
// JavaScript 框架设计 chapter12
Deferred = function(canceller){
  this.state = -1;
  this.fired = 0;
  this.results = [null, null];
  this.paused = 0;
  this.chain = [];
  this.canceller = canceller;
  this.silentlyCancelled = false;
}

Deferred.prototype = {
  state: function(){
    return ['unfired', 'success', 'error'][this.state + 1];
  },
  _check: function(){

  },
  _errback: function(){

  },
  _resback: function(){
    this._fire()
  },
  callback: function(res){
    this._check();
    if(res instanceof Deferred){
      throw new Error("不能调用 Deferred 作为 Deferred 参数");
    }
    this._resback(res);
  },
  addCallbacks: function(sucCall, errCall){
    errCall = errCall || sucCall;
    this.chain.push([sucCall, errCall]);
    if(this.fired >= 0){
      this._fire();
    }
    return this;
  },
  _fire: function(){
    var chain = this.chain,
      fired = this.fired,
      res = this.results[fired],
      self = this,
      cb = null;
    while(chain.length > 0 && this.paused === 0){
      var pair = chain.shift();
      var f = pair[fired];
      if(f === null){
        continue;
      }
      try{
        res = f(res);
        fired = res instanceof Error ? 1 : 0;
        // if(res instanceof Deferred){
        //   cb = function(res){

        //   }
        // }
      }catch(err){
        fired = 1;
        res = err;
      }
    }
    this.fired = fired;
    this.results[fired] = res;
    // if(cb && this.paused){

    // }

  }
  
}