/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-06-20 19:04:12
 * @LastEditors: camus
 * @LastEditTime: 2021-06-20 20:17:22
 */
class Parent {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
  talk(): void {
    console.log(this.name);
  }
}
let a = new Parent("camus");
a.talk();
