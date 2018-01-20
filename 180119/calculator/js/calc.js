window.onload = function () {

    //定义一个计算器类
    class Calc {
        constructor() {
            //存储输入的数字与操作符
            this.data = [];
            //存储临时数字
            this.figure = '';
            //计算器是否开始输入
            this.isStart = 0;
            this.sc = document.querySelector('#screen');
            this.btns = document.querySelectorAll('.btn');
        }
        //四则运算
        operate(){
          let result;
          let lastOpt = this.data[3];
          switch(this.data[1]){
            case '+' :
                    result = parseFloat(this.data[0])+parseFloat(this.data[2]);
                    break;
            case '-' :
                    result = parseFloat(this.data[0])-parseFloat(this.data[2]);
                    break;
            case '*' :
                    result = parseFloat(this.data[0])*parseFloat(this.data[2]);
                    break;
            case '/' :
                    result = parseFloat(this.data[0])/parseFloat(this.data[2]);
                    break;
          }
          switch (lastOpt) {
            case '=':
              this.sc.value = result;
              //算出结果之后可以继续计算
              this.data.length=0;
              this.data.push(result);
              console.log(this.data)
              break;
            default:
              this.data.length=0;
              this.data.push(result,lastOpt);
          }
        }
        inputNum(msg){
          console.log(msg)

                    if (this.isStart === 0) {
                        this.sc.value = ' ';
                    }
                    this.isStart++;
                    this.sc.value += msg;
                    this.figure += msg;
        }
        inputOpt(msg){
          console.log(msg)
          this.sc.value += msg;
          //加一次判断
          if(this.figure){
            this.data.push(this.figure);
          }
          this.data.push(msg);
          this.figure = '';
          if(this.data.length === 4){
            this.operate();
          }
        }
        //初始化，为按钮绑定事件
        init() {
            // this.clear();
            let _this = this;
            for(let i = 0;i<this.btns.length;i++){
              this.btns[i].addEventListener('click',function(){
                let clsArr = this.className.split(' ');
                let btnCon = this.innerText;
                console.log(clsArr)
                switch(clsArr[1]){
                  case 'opt' :
                          _this.inputOpt(btnCon);break;
                  case 'num' :
                          _this.inputNum(btnCon);break;
                  default:
                          _this.clear();

                }
              })
            }
        }
        //清空输入的内容
        clear() {
            this.sc.value = 0;
            this.isStart = 0;
            this.data.length = 0;
        }
    }

    let calculator = new Calc();
    calculator.init();

}
