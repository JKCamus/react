## Generator生成器

1. ### 普通函数返回

   ```js
       //1.普通函数
       function foo() {
         console.log("foo被执行");
       }
       foo();
   ```

2. 生成器函数的定义

   ```js
       // 生成器函数
       function* foo() {              //添加了*，可以在function后，也可以在函数名之前
         console.log("111");
         yield "Hello";                 //yield对函数进行返回，类似栈结构
         console.log("222");           
         yield "World";
         console.log("333");
         yield "camus";
         console.log("444");
       }
   
   ```

3. 使用迭代器

   ```js
   迭代器返回的是对象，{value:"Hello",done:false}类似栈结构，使用next进行调用，先进先出。当全都调用完后，返回done为true
   ```

4. 默认情况下，foo（）函数就算调用了也不会吧执行，只用使用next（）才会执行，而且只执行到当前，调用一次，为到Hello



