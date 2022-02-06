const sayHello = function (next) {
  // next();
  helloWorld()
};

const helloWorld = function () {
  console.log("Hello World!");
};

sayHello(helloWorld);
// helloWorld()

const print = function () {
  console.log("print");
};
sayHello(print);
