// // const { SyncHook } = require('tapable');

// class SyncHook {
//   constructor(args) {
//     this.tasks = [];
//     this.args = args;
//   }
//   tap(name, fn) {
//     this.tasks.push(fn);
//   }
//   call(...args) {
//     if (args.length < this.args.length) {
//       console.log('发布个数少了');
//     }

//     args = args.slice(0, this.args.length + 1);
//     const finalTask = args.pop();

//     let index = 0;   
//     let next = () => {
//       if(index === this.tasks.length){
//         finalTask();
//         return;
//       }
//       const task = this.tasks[index];
//       index++;
//       task(...args, next);
//     }

//     next();   
//   }
// }

// class Lesson {
//   constructor() {
//     this.hooks = {
//       vue: new SyncHook(['desc'])
//     }
//   }

//   tap() {
//     this.hooks.vue.tap('zhangsan', function (desc, done) {
//       setTimeout(() => {
//         console.log('zhangsan: ', desc);
//         done();
//       }, 2000)
//     });
//     this.hooks.vue.tap('ls', function (desc, done) {
//       setTimeout(() => {
//         console.log('ls: ', desc);
//         done();
//       }, 1000)
//     });
//   }
//   call() {
//     this.hooks.vue.call('vue 上线了', function () {
//       console.log('end');
//     });
//   }
// }

// const myLesson = new Lesson();
// myLesson.tap();
// myLesson.call();
