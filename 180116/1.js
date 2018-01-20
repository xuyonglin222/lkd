var bob = {
  name:'bob',
  sayHello:function(n,m){
    console.log(arguments instanceof Array);
    return "hi "+ this.name;
  }
};

var m = 'info';
function foo(){
  'use strict'
  console.log(typeof this);
}

foo()


console.log(foo);
var foo;
function foo(){}


var a =[];
function func(n){
  arguments.push(3);
  return a.sort();
}
fun

function A(){
  function B(){
    console.log(this)
  }
}

var a={
  A:function(){
    function B(){
      console.log(this);
    }
    B();
  }
}

a.A();

function swap(x,y){
  var t;
  t = x;
  x = y;
  y = t;
}
var a=3,b=4;
swap(a,b);
