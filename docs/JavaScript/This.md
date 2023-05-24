---
sidebar_position: 7
authors: [zenzen]
tags: [程式]
---
# This

This 在 JavaScript 中是個很容易被誤解的主題，主要會跟呼叫方法以及函式類型有關，導致很多非預期的結果出現。

下面就讓我們來好好重新認識 This 吧！

## 傳統函式

傳統函式中的 this 只跟「**調用方式**」有關，物件下呼叫的 this 基本上都是指向該物件

1. simple call 與 物件下呼叫

    ```jsx
    var A = 'Global';
    function JS() {
     console.log(this.A);
    }
    JS(); // Global ，此為 simple call

    var obj = {
     A: 'Scope',
     JS() {
      console.log(this.A);
     }
    }
    obj.JS(); // Scope
    ```

2. 物件下呼叫

    ```jsx
    function JS() {
     console.log(this.A);
    }

    var outerObj = {
     A: 'outer',
     JS,
     innerObj: {
      A: 'inner',
      JS,
     }
    }
    outerObj.JS();   // outer
    outerObj.innerObj.JS();   // inner
    ```

3. 無物件呼叫

    ```jsx
    var A = 'Global';
    function JS() {
     console.log(this.A);
    }

    var obj = {
     A: 'obj',
     fn() {
      JS();
     }
    }
    obj.fn();  // Global
    ```

4. callback function

    ```jsx
    var obj = {
     A: 'obj',
     fn() {
      // callback function
      setTimeout(function() {
       console.log(this.A);
      });
     }
    }
    obj.fn();  // Global
    ```

## 箭頭函式

箭頭函式會自動帶上 return，**箭頭函式沒有自己的 this**，會指向**外層函式作用域**，this 請往外層看

1. 縮寫

    ```jsx
    const arr = [1, 2, 3, 4, 5,];
    // 傳統函式
    const filterAry = arr.filter(function(item) {
     return item % 2;
    });

    // 箭頭函式縮寫一
    const filterAry = arr.filter((item) => {
     return item % 2;
    });
    // 箭頭函式縮寫二
    const filterAry = arr.filter((item) => item % 2 ); //箭頭函式會自己帶上return
    const filterAry = arr.filter( item => item % 2 ); //參數只有一個可再去除參數的中括號
    ```

2. 箭頭函式

    ```jsx
    // 傳統函式寫法
    var name = 'Global';
    const person = {
     name: 'Ming';
     callName: function() {
      console.log('1', this.name);
      setTimeout(function() {
       console.log('2', this.name);
       console.log('3', this)
      }, 10)
     }
    }
    person.callName(); // 1Ming, 2Global, 3window

    // 箭頭函式寫法
    const person = {
     name: 'Ming';
     callName: function() {
      console.log('1', this.name);
      setTimeout(() => {
       console.log('2', this.name);
       console.log('3', this)
      }, 10)
     }
    }
    person.callName(); // 1Ming, 2Ming, 3{name: 'Ming', callName: f}
    ```

3. 陷阱

    ```jsx
    var name = 'Global';
    const person = {
     name: 'Ming';
     callName: () => {
      console.log(this.name)
     }
    }
    person.callName(); // Global
    ```

    ```jsx
    var name = 'Global';
    const person = {
     name: 'Ming';
     callMe() {
      const callName = () => {
       console.log(this.name)
      };
      callName();
     }
    }
    person.callMe(); // Ming
    ```

4. 實戰

    ```jsx
    var name = 'Global';
    var obj = {
     name: 'obj',
     fn() {
      setTimeout(function() {
       console.log(this.name);
      });
     }
    }
    obj.fn();

    // 2種方式
    var obj = {
     name: 'obj',
     fn() {
    1. const vm = this;   // 透過賦予變數綁定指向
    2. setTimeout(() => {})   // 箭頭函式指向外層函式所屬物件
      setTimeout(function() {
       console.log(this.name);
      });
     }
    }
    ```
