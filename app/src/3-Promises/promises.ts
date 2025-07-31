(async () => {
  // class MyPromise {
  //   private thenCallbacks: Array<(result: any) => void> = [];
  //   private catchCallbacks: Array<(error: Error) => void> = [];
  //
  //   constructor(executor: (resolve: (value: any) => void, reject: (reason?: any) => void) => void) {
  //     executor(this.resolve.bind(this), this.reject.bind(this));
  //   }
  //
  //   private resolve (value: any) {
  //     this.thenCallbacks.forEach(callback => callback(value));
  //   }
  //
  //   private reject (reason?: any) {
  //     this.catchCallbacks.forEach(callback => callback(reason));
  //   };
  //
  //   then(callback: (result: any) => void) {
  //     this.thenCallbacks.push(callback);
  //     return this;
  //   }
  //
  //   catch(callback: (error: Error) => void) {
  //     this.catchCallbacks.push(callback);
  //   }
  // }


  // const test = (callback1, callback2, catchCallback) => {
  //   try {
  //     setTimeout(() => {
  //       callback1('Hello, World!');
  //       callback2('Hello, World!');
  //       throw new Error(1)
  //     }, 1000);
  //   } catch (e) {
  //     catchCallback(e);
  //   }
  // }
  //
  // test((result: any) => {
  //   console.log(1, result);
  // }, (result: any) => {
  //   console.log(2, result);
  // }, (error: Error) => {
  //   console.log(error)
  // })



  // try {
  //   const p = await new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       // resolve('Hello, World!');
  //       try {
  //         throw new Error('Something went wrong!');
  //       } catch (e) {
  //         reject(new Error('Something went wrong!'));
  //       }
  //     }, 2000);
  //   })
  // } catch (e) {
  //   console.log('Я поймал ошибку!');
  // }

  //
  // .then((result: any) => {
  //   console.log(1, result);
  // })
  //
  // .then((result: any) => {
  //   console.log(2, result);
  // })
  // .then((result: any) => {
  //   console.log(3, result);
  // })
  //
  // .catch((error: Error) => {
  //   console.log('Я поймал ошибку!');
  //   console.log(error)
  // })

  // const a1 = () => new Promise((resolve, reject) => {
  //   setTimeout(reject, 1000);
  // });
  //
  // const a2 = () => new Promise((resolve, reject) => {
  //   setTimeout(resolve, 3000);
  // });
  //
  // const result = await Promise.allSettled([a1(), a2()]);
  //
  // console.log('ready', result);


  class DataSender {
    protected prepareData(data: any): any {
      return 'Data from Data Sender 1';
    }

    public send(data: any): any {
      console.log(this.prepareData(data));
    }
  }


  class DataSender2 {
    protected prepareData(data: any): any {
      return 'Data from Data Sender 2';
    }
  }

  const ds1 = new DataSender();
  const ds2 = new DataSender2();

  ds2.sendDS1 = ds1.send.bind(ds1);

  ds2.sendDS1('Hello, World!');
})();

