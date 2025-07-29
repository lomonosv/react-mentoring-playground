(async () => {
  class MyPromise {
    constructor(...args) {
    }
  }

  new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello, World!');
    }, 1000);
  }).then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error)
  })
})();
