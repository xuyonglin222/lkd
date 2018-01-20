function A(){
  var s = 0;
  console.log(this);
  return function B(){
    console.log(this);
  }
}

var q=A();

function A(){
  this.say=function(){
    console.log('A')
  }
}
function B(){
  this.bark=function(){
    console.log('B');
  }
}

A.prototype = new B()

function Animal(anim,para){
  if(anim==='狗'){
    return new Dog(anim,para);
  }else if(anim==='猫'){
    return new Cat(anim,para);
  }
}
function Dog(anim,para){
  this.anim=anim;
  this.para=para;
}
function Cat(anim,para){
  this.anim=anim;
  this.para=para;
}

var dog = new Animal('狗','汪');
var cat = new Animal('猫','喵');


function StringBuilder(){
  var data = [];
  this.add = function(str){
    data.push(str);
  }
  this.toString = function(){
    return data.join(' ');
  }
}
var sb = new StringBuilder();
sb.add('hi');


function A(){
  this.name = 'A';
  var info ='info';
  this.age = 18;
  this.show = function (){
    return 'show A '+ this.info;
  }
}
A.prototype.getInfo =
 function (){
  return 'getInfo '+ info;
}
function B(){}

B.prototype = new A();

var b = new B();
