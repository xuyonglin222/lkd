var a=[1,2,3,4,5,6,7,8];
function circle(arr,flag){
  var count = 0;
  while(arr.length>1){
      var e =arr.shift();
    if(++count == flag){
      count=0;
      continue;
    }
    arr.push(e);
  }
  console.log(arr);
}
circle(a,3)
