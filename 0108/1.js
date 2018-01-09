var obj = {};

if('0'){
    console.log("true")
}
else{
    console.log("false");
}


function atm(m){

var arr = [];
var rmb = [100,50,20,10,5,1]
for(var i=0;i<rmb.length;i++){
  arr[i] = Math.floor(m/rmb[i]);
  m %= rmb[i];
  if(m==0){
    // console.log(arr[i]);
  }
}
console.log(arr);
}
var m = 789;

atm(1000);
