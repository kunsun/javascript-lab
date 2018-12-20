function SuperClass() {
  this.x = 0;
}

function OtherSuperClass() {
  this.y = 0;
}
OtherSuperClass.prototype.getName = function() {
  console.log('other name')
}

function MyClass() {
  SuperClass.call(this);
  OtherSuperClass.call(this);
}

// inherit one class
MyClass.prototype = Object.create(SuperClass.prototype);
// mixin another
Object.assign(MyClass.prototype, OtherSuperClass.prototype);
// re-assign constructor
MyClass.prototype.constructor = MyClass;

MyClass.prototype.myMethod = function(x, y) {
  // do something
  console.log(this.x, this.y)
};

let a = new MyClass()
a.myMethod()
console.log(OtherSuperClass)
console.log(a)