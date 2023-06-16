---
sidebar_position: 10
authors: [zenzen]
tags: [程式]
---
# 關於變數

1. 非數字 `NaN`：

    - 表示 "Not a Number"，表示一個**無效的數字值**。這個錯誤狀態源於 JavaScript 嘗試執行一個數學運算 ，(例如：把本來不能轉型為數字的值強行轉為數字 ****(把字串轉成整數)、執行不合法的數學運算、計算失敗 (-1 平方根)、把 `NaN` 放入運算等等…)，但結果失敗，所以只能得出一個無效的數值。

2. 空字串 `""`：

    - 表示一個**長度為 0 的字串**。它是一個**有效的字串值**，但內容為空。當你想要表示一個沒有文字內容的字串時，可以使用空字串。

    - 空字串是告訴電腦要留空間給此變數，之後跑迴圈或是在 funciton 內把值傳給它。

3. 沒有值 `null`：

    - 表示**變數的值為空**，是一個特殊的值。它表示該變數目前沒有任何有效的物件值。通常在程式中，你可以將變數設置為 `null` 來表示它是空的，需要明確賦值為 `null`。

    - `null` 常用在判斷這個變數是否為 `null`，接著去做執行。

4. 未賦值 `undefined`：

    - 表示**變數已經被宣告，但尚未給定值**，它是一種特殊的值。在 JavaScript 中，當你宣告一個變數但沒有為它賦值時，該變數的預設值就是 `undefined`。所以 `undefined` 表示一個尚未賦值的狀態。

    - `undefined` 和 `not defined`

    - - 在 JavaScript 中，`undefined` 和 `not defined` 是不同的

    - - `undefined` **是已宣告變數但尚未給定值**，通常在開發時若看到 `undefined` 就會第一直覺知道「該變數還沒賦值」
    - - `not defined` **則是該變數尚未宣告過，執行後會出現錯誤訊息**。

    - 不過物件下的第一層 window.xxx (變數名稱) 預設就會回傳 `undefined`，並非代表已定義，只是 JS 的特性。

5. falsy 類別：

    - `0, null, undefined, NaN, ""` 是 falsy，其餘都是 truthy，可以用 `Boolean(value)` 把值轉型為布林值做判斷。

## 資料型別

![20104175vA55RlDfRq.png](https://ithelp.ithome.com.tw/upload/images/20190926/20104175vA55RlDfRq.png)

<aside>
💡 JavaScript 是個「**弱型別**」的程式語言，嚴格來說，**變數本身其實不帶有資料型別的資訊，其中的「值」或「物件」才有**。所以說**在執行時期透過變數內容來參考至物件或值，才會得知此變數有什麼操作的方法**。

</aside>

內建的型別主要可以分成基本型別 (Primitives) 與物件型別 (Object) 兩大類。

基本型別又分成 `string`、`number`、`boolean`、`null`、`undefined` 前三個又稱作「**原始型別包裹物」**

基本型別，會是以**純值**的形式存在 (string、number、boolean、null、undefined)

物件型別，指的是**可能由零或多種不同型別** (包括純值與物件) 所組合成的物件。

可以透過 `isNaN(value)` 來幫助判斷變數是否為 `NaN`。

### **物件 Object**

<aside>
💡 **所有基本型別 (Primitives) 以外的值都是物件**。

</aside>

### 判斷屬性是否存在？

不存在的屬性，會回傳 `undefined`，除了檢查 `undefined` 外，還有 `in` 運算子與 `hasOwnProperty()` 方法可以檢查屬性是否存在

```jsx
var obj = {
  name: 'Object'
};

// 透過 in 檢查屬性
console.log( 'name' in obj );     // true
console.log( 'value' in obj );    // false

// 透過 hasOwnProperty() 方法檢查
obj.hasOwnProperty('name');       // true
obj.hasOwnProperty('value');      // false
```

## **全域與區域變數**

```jsx
// 全域變數 ( 未賦值 )
var total;
function count(one, two) {
 // 區域變數
 var total = one * two;
 console.log("總價："+ total);
}
count(1, 2);  // 總價：2
console.log(total);  // undefined
```

**以下重新整理宣告變數的概念：**

(1) 宣告全域變數之後，是無法刪除的。例如：

```jsx
var a = 1;
a = 2; // 重新賦值
delete a; // 回傳 false 代表刪除失敗
console.log(a); // 2
```

(2) 物件 window 底下的屬性，才會刪除成功。例如：

```jsx
b = 1; // 物件新增的概念
delete b; // 回傳 true 代表刪除成功
```

(3) 由 var 宣告的變數有效範圍是**以 function 做分界**的。例如：

```jsx
function area () {
 // 區域變數
 var a = 3;
 // 重新賦值
 a = 4;
}
```

(4)  let 只會存活在 大括號 {} 的作用域。

```jsx
if( 2 > 1 ) { let a = 1 }; // 在該大括號上，a 存在，但大括號外，就無法讀取，函式也是如此
```

(5) 

對 `var` 來說

- 作用域：function、函式作用域 ( function space )
- 區域變數：**寫在 function 裡面** ( 未重新宣告則外部可調用 )
- 全域變數：寫在 function 外面，**若不是在函式內宣告則會被當作全域宣告**。會存在 window 裡 ( 所以 var 的全域變數、函式愈多，browser 記憶體愈肥 )
- `if(true) {var b= 'Casper'; }` b 也是全域變數，因為並非函式內宣告，var 沒有塊級作用域
- 允許重複宣告
- 有 hoisting 特性，宣告時可以只建立但不賦值

對 `let`、`const` 來說

- 作用域：block、區域作用域 ( block space )、函式作用域 ( function space )
- 區域變數：**寫在 {} 裡面**（ 外部不可調用 ）
- 全域變數：寫在 {} 外面，在全域範圍使用 let 宣告變數，變數不會成為全域物件的特性，**「並不會」在 window 的屬性下，它會有屬於自己的作用域，但不屬於 window**，因為全域執行環境 ( Global space ) 是由全域物件 ( ObjectEnv ) 以及宣告環境 ( DeclarationEnv ) 組成，而 **const / let 宣告的變數會放在宣告環境而不會進入全域環境**。
- let、const 為何可避免污染全域變數環境？⇒ 因爲不會在 window 掛上全域變數，所以不會成為 window 的屬性。
- 不允許重複宣告 ( 同個區塊上 )
- 沒有 hoisting 特性，宣告時才會建立並賦值
- var 在 function 外面的就是全域變數，在 function 裡面的就是區域變數，全域變數在整份程式碼內都有效，而且會被記憶進電腦的記憶體內佔用空間；但區域變只有在 function 內有用，當執行完以後，變數隨即會被清除，記憶體被釋放，不會佔用空間。

(6)

1. **const：唯獨性質，**一般使用在**識別值(eidentifier)，不會被重新指定值。**例如：宣告恆定不做改變的變數 ⇒ const PI = 3.14159。const 在宣告變數時就會進行初始化，無法等到之後再賦予值，因此**必定要在一開始就給予值作宣告，否則將會報錯**。但若使用陣列物件方式宣告還是可以改變值，此時就要搭配 object.freeze(xxx) 使用，令其凍結不能被變更。
2. **let：**一般使用在**變數(variable)可能會被重新指定值。**例如：在迴圈 (for loop) 中，一開始的變數宣告使用。也可以說較常使用在函式 (function) 自行定義的區塊 (block) 中，例如：迴圈 (for loop)或者邏輯、數學等演算法括弧**( {} or () )**中作宣告使用，而不會存在並使用於整個函式(function) 中。
3. **var：**ES6推出 **let** 宣告方法後，**JavaScript最弱的變數宣告**，使用在變數可能或不會被重新賦予值，或者宣告範圍在整個函式 (function) 或者區塊 (block) 中。

    建議在開發ES6之後的專案中，使用 **const** 或 **let** 嚴謹的宣告變數而非 **var**，除了讓開發的專案更加穩定外，也可以增加程式碼的可讀性。例如：**const** 可以提醒閱讀程式碼的人，此變數不應該去做改變。

(7) **例外注意：**

```jsx
function test() {
 // 雖然在 function 裡面，但因沒有用關鍵字宣告，當此 function 被執行時，num 會變全域變數，且掛在 window
 num = 0;
}
```

`typeof()` - 查詢值的屬性（除錯常用）

```jsx
var num = 3;
typeof(num) // number
```

`parseInt()` - 字串轉數字（input表單裡的值都是字串，所以有必要轉成數字）

```jsx
var hamNum = parseInt**(** document.getElementById('hamNumId').value **)** * hamPrice;
```

`toString()` - 數字轉字串

```jsx
let a = 1;
a = a.toString();
```

`.value` - 取元素裡的值

```jsx
var hamNum = document.getElementById('hamNumId')**.**value
```

`.trim()` - 過濾頭尾空白

```jsx
let a = "   g@mail.com"
a.trim(); // g@gmail.com
```

`.substring()` - 取得指定區間的字串

```jsx
var anyString = "Mozilla";

// 输出 "Moz"
console.log(anyString.substring(0,3));
console.log(anyString.substring(3,0)); // 前面大於後面則會調換
console.log(anyString.substring(3,-3)); // 前面大於後面，一數又小於0 會被當成0
console.log(anyString.substring(3,NaN)); // 前面大於後面，一數NaN 會被當成0
console.log(anyString.substring(-2,3));
console.log(anyString.substring(NaN,3));

// 输出 "lla"
console.log(anyString.substring(4,7));
console.log(anyString.substring(7,4));

// 输出 ""
console.log(anyString.substring(4,4)); // 兩都同數則返回空字串

// 输出 "Mozill"
console.log(anyString.substring(0,6));

// 输出 "Mozilla"
console.log(anyString.substring(0,7));
console.log(anyString.substring(0,10));
```

`.slice()` - 取得指定區間的字串

```jsx
const email = "abcdefg@gmail.com";
console.log(email.slice(0, 7)); // abcdefg
console.log(email.slice(7)); // @gmail.com
console.log(email.slice(3, 7)); // defg
console.log(email.slice(0, indexOf("@"))); // abcdefg
```

`.split(separator , limit)` - 字串切割（指定參數地方分割, 指定回傳的最大長度）

```jsx
let str = "Hi SPLIT, Have A Nice Day.";
str.split();　　　　 　 // ["Hi SPLIT, Have A Nice Day."]，同 str.split(0);
str.split(" ");　　　　 // ["Hi", "SPLIT,", "Have", "A", "Nice", "Day."]，同 str.split(/\s+/);
str.split(" ", 3);　　　// ["Hi", "SPLIT,", "Have"]
str.split(" ")[3];　　　// "A"
str.split("");　　　　  // ["H", "i", " ", "S", "P", "L", "I", "T", ",", " ", "H", "a", "v", "e", " ", "A", " ", "N", "i", "c", "e", " ", "D", "a", "y", "."]
str.split("", 11);　　　// ["H", "i", " ", "S", "P", "L", "I", "T", ",", " ", "H"]
str.split("")[11];　　　// "a"
let email = 'aaa@gmail.com';
let temp = email.split('@'); //["aaa", "gmail.com"]
```

`join()` - 將陣列（或一個類陣列（array-like）物件）中所有的元素連接、合併成一個字串回傳

```jsx
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join()); // "Fire,Air,Water"
console.log(elements.join('')); // "FireAirWater"
console.log(elements.join('-')); // "Fire-Air-Water"
```

++1 ⇒ 符號放前面數值會立刻在這個階段就被增加；

1++ ⇒ 符號放後面數值會在下一個階段才增加。
