const lib1 = require('./lib1');

console.log('hello world');

if (typeof window !== 'undefined') {
  console.log('running in browser');
} else {
  console.log('running in node');
}
console.log(lib1);
lib1.sayHello('john');

setTimeout(() => {
  console.log(lib1);
}, 2000);

// setTimeout(()=>{
//   console.log(lib1)

//   const lib1_new = require('./lib1')
//   console.log(lib1)
// })
