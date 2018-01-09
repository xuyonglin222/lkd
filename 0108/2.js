
//123->壹佰贰拾叁
function zi(str){
    str = String(str);
    var len = str.length - 1;
 var idxs = ['','十','百','千','万','十万','百完','千万','亿'];
 var num = ['零','壹','贰','叁','肆','伍','陆','柒','捌','玖'];
 var result = '';
 for(var i = 0;i < str.length;i++){
   result =result + num[str.charAt(i)] + idxs[len - i];
 }
 console.log(result);
}
zi(2000);

//输入薪水，计算个人所得税
function tax(){

}
