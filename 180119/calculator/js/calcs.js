class Calc {
  constructor() {
    //存储后缀表达式的数组
    this.data = [];
    //存储运算符的栈
    this.Stack = [];
    //计算结果栈
    this.resStack = [];
    this.btns = document.querySelectorAll('.btn');
    this.sc = document.querySelector('#screen');
    this.isStart = 0;
    //缓存数字
    this.figure = ''
  }

  optPrecedence(current, sFirst) {
    //判断current和sFirst两个运算符的优先级,返回栈顶元素是否满足出栈的boolean值
    let optArr = [
      ['+', '-'],
      ['*', '/']
    ];
    let cIndex;
    let sIndex;
    optArr.map(function(item, index) {
      item.map(function(citem, cindex) {
        if (current === citem) {
          cIndex = index;
        }
        if (sFirst === citem) {
          sIndex = index;
        }
      })
    });
    return cIndex <= sIndex;
  }
  inputNum(msg) {

    this.sc.value += msg;
    this.figure += msg;
  }
  isInStack() {
    //判断左括号是否在栈里
    let flag = false;
    for (let i = 0; i < this.Stack.length; i++) {
      if (this.Stack[i] === '(') {
        flag = true;
      }
    }
    return flag;
  }
  inputOpt(msg) {
    //将运算符输出到屏幕上
    this.sc.value += msg;
    //将缓存数字放入data数组里
    if (this.figure) {
      this.data.push(this.figure);
    }
    this.figure = '';

    if (msg === ')') {
      for (let i = this.Stack.length - 1; i > -1; i--) {
        let opt = this.Stack.pop();
        if (opt !== '(') {
          this.data.push(opt)
        } else {
          break;
        }
      }
    } else if (this.Stack.length === 0 || this.isInStack() || msg === '(') {
      this.Stack.push(msg)
    } else {
      for (let i = this.Stack.length - 1; i >= -1; i--) {
        if (this.Stack[0] != '' && this.optPrecedence(msg, this.Stack[i])) {
          this.data.push(this.Stack.pop());
        } else {
          this.Stack.push(msg);
          break;
        }
      }
    }
  }
  operate() {
    let result;
    this.data.push(this.figure);
    this.figure = '';
    while (this.Stack.length != 0) {
      this.data.push(this.Stack.pop())
    }
    while (this.data.length != 0) {
      let x = this.data.shift();
      let num = parseFloat(x); //num 可能是NaN或者数字
      //NaN != NaN
      if (!isNaN(num)) {
        this.resStack.push(num);
      } else {
        let num1 = this.resStack.pop();
        let num2 = this.resStack.pop();
        switch (x) {
          case '+':
            result = num1 + num2;
            break;
          case '-':
            result = num2 - num1;
            break;
          case '*':
            result = num1 * num2;
            break;
          case '/':
            result = num2 / num1;
            break;
        }
        this.resStack.push(result);
      }
    }
    this.sc.value = this.resStack.pop();
    this.data.push(' '+result);
    this.figure +=result; 
  }
  init() {
    let _this = this;
    for (let i = 0; i < this.btns.length; i++) {
      this.btns[i].addEventListener('click', function() {
        if (_this.isStart === 0) {
          _this.sc.value = ' ';
        }
        _this.isStart++;
        let clsArr = this.className.split(' ');
        let btnCon = this.innerText;
        switch (clsArr[1]) {
          case 'opt':
            _this.inputOpt(btnCon);
            console.log(_this.data);
            console.log(_this.Stack);
            break;
          case 'num':
            _this.inputNum(btnCon);
            break;
          case 'equal':
            _this.operate();
            break;
          default:
            _this.clear();
        }
      })
    }
  }
  clear() {
    this.sc.value = 0
    this.isStart = 0;
    this.figure = '';
    this.data.length = 0;
    this.Stack.length = 0;
  }
}
let calculator = new Calc();
calculator.init();
