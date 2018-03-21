  /*
   *   匿名函数的执行环境具有全局性
   * */
  let name = "The Window";

  let object = {
      name: "My Object",
      getNameFunc: function () {
          let that = this;
          console.log(that.name);
          return function () {
              let _this = this;
              console.log(_this.name)
              console.log(this.name)
              return this.name;
          };
      }
  };
  console.log(object.getNameFunc()); //function () { return this.name; }
  console.log(object.getNameFunc()()); // undefined
  /**
   * node.js执行结果如下：
   * My Object
   * [Function]
   * My Object
   * undefined
   * undefined
   * undefined
   */