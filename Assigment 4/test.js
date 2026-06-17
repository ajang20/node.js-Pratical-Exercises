const fs = require('fs')

setTimeout(() => console.log('setTimeout 1'), 0)
setImmediate(() => console.log('setImmediate 1'))
process.nextTick(() => console.log('nextTick 1'))
Promise.resolve().then(() => console.log('Promise 1'))
fs.readFile('./users.json', () => console.log('fs.readFile done'))
process.nextTick(() => console.log('nextTick 2'))
Promise.resolve().then(() => console.log('Promise 2'))
setTimeout(() => console.log('setTimeout 2'), 0)
setImmediate(() => console.log('setImmediate 2'))
console.log('synchronous — main thread')

//additional code :
setImmediate(() => {
  process.nextTick(() => console.log('nextTick inside setImmediate'))
  Promise.resolve().then(() => console.log('Promise inside setImmediate'))
})

/*
1. asynchronous - main thread 
2. nextTick 1
3. nextTick 2
4. Promise 1
5. Promise 2
6. setTimeOUt 1
7. setTimeout 2 
8. fs.readfile done 
9. setImmediate 1 
10. setImmediate 2
11. nextTick inside setImmediate 
12. Promise inside setImmediate

*/