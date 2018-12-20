var o;
o = Object.create(null);
console.log(o)

o = {};
o = Object.create(Object.prototype);
console.log(o)

o = Object.create(Object.prototype, {
  foo: {
    writable: true,
    configurable: true,
    value: 'hello'
  },
  bar: {
    configurable: false,
    get: function() {
      return 10
    },
    set: function(value) {
      console.log("setting `o.bar` to", value)
    }
  }
})
console.log(o)

function Constructor() {}
o = new Constructor();
o = Object.create(Constructor.prototype);