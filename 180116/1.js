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
  a.push(n);
  return a.sort();
}
fun
