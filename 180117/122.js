class A{

}
class B extends A{
  constructor(age,name){
    age = 18;
    name='A';
  }
  getMax(){
    return 'hi ' +this.name;
  }
}
var b = new B();
b.getMax()
