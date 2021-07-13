/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-07-11 23:40:23
 * @LastEditors: camus
 * @LastEditTime: 2021-07-13 23:04:59
 */
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name; //如果要赋值，需要在constructor之前先定义
    this.age = age;
  }
  sayHi(msg: string): void {
    console.log(`my name is ${this.name},${msg}`);
  }
}
