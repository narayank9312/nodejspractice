function sayHello(name) {
  console.log('Helllo', name);
}
console.log(module.exports);

module.exports = {sayHello};
console.log(module.exports);

// console.log(module.exports);

setTimeout(() => {
  module.exports.omg = 'wow';
}, 1000);
