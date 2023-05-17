---
sidebar_position: 6
# slug: First Post
authors: [zenzen]
tags: [程式]
---

# 原型、原型鍊和繼承

OOP 基本概念是：**採用物件 (objects) 來模塑真實的實物世界**：也就是在程式中的呈現是**透過 objects 來塑造其模型，且＼或提供簡單方式存取其「難以或不可能採用的功能」**。

首先為某個複雜東西建立簡單的模型，藉以代表其最重要的概念或特質或資料或功能，接者可從這個「類別」建立物件實體 (Object instance) — 即該物件包含了類別中所定義的資料與功能。在根據類別建立物件實體時，就是執行類別的「建構子 (Constructor) 函式」所建立。

**JavaScript 是使用原型而非 class，因為 JavaScript 根本基本上都是物件，任何的內容都以物件來做建立，所以必須以原型的方式作出類似 class 的方法**，原型繼承是 JavaScript 獨有的特性，透過原型的方式做出類別繼承的方法。

## **原型是什麼？**

我們可以把原型想像成一個**藍圖**。例如我們想建一台車，就會想到**一台車會包括以下**的特性：

- 車的**種類** (電動車、貨車、摩托車...)
- 車的**顏色** (紅色、黑色、藍色...)
- 車的**坐位數目**

這就是一台車的藍圖，但它只是一個藍圖，並不是實實在在的一台車。接下來我們要實際建出一台車，就可以按這份藍圖去建起來。

- 我的車子跟你的車子**無關係**，是兩樣不同的物件，各自按自己的喜好調整屬性值
- 我的車子和你的車子**共同繼承**了同一個藍圖

## **原型鍊 (prototype chain)**

由於 JavaScript 使用的是 prototypal inheritance，所以必然會包含原型 (prototype) 的概念，看一下這張圖：

![一個物件裡面除了所給予的屬性值外，另外也包含原型 prototype。](https://4.bp.blogspot.com/-fatzOLLqlGM/V2dXLiCs5RI/AAAAAAAAmwE/PLkLHJTmOkIiIz0ftJVdsdWmVhzJqgt8wCLcB/s640/1.png)

一個物件裡面除了所給予的屬性值外，另外也包含原型 prototype。

JavaScript 中會有一些預設的屬性和方法，**所有的物件和函式都包含 prototype 這個屬性**，假設我們把 prototype 叫做 proto，這時候如果我們使用 `obj.prop2` 的時候，JavaScript 引擎會先在 obj 這個物件的屬性裡去尋找有沒有叫做 prop2 的屬性，**如果它找不到，這時候它就會再進一步往該物件的 proto 裡面去尋找**。所以，雖然我們輸入 `obj.prop2` 的時候會得到回傳值，但實際上這不是 obj 裡面直接的屬性名稱，而是**在 obj 的 proto 裡面找到的屬性**名稱 (即，`obj.proto.prop2`，但我們不需要這樣打)。

乍看之下，prop3 很像是在物件 obj 裡面的屬性，但實際上它是在 obj → prop → prop 的物件裡面，而這樣**從物件本身往 proto 尋找下去的鍊我們就稱作「原型鍊 (prototype chain)」**。這樣一直往下找會找到什麼時候呢？它會直到某個對象的原型為 `null` 為止 (也就是不再有原型指向)。

## 函式建構式 (function constructor)

當使用 `new` 這個關鍵字時，實際上會先有一個空的物件被建立，接著 `new` 關鍵字函式會被執行，當函式執行的時候，在 execution context 中會有 `this` 被建立，而**當我們使用 `new` 的時候，函式裡面的 `this` 會被指定成剛剛所建立的那個空物件**。只要這個函式建構式沒有指定 return 為其他物件，它就會直接回傳給我們這個新建立的物件，若有 return 其他內容，原本被建立的新物件不會被回傳，而是回傳我們最後 return 給它的內容。

想要建立出同屬性名稱但不同屬性值的物件內容，我們可以**把物件的屬性值變成參數**，如此就能**透過此 function constructor 建立出許多不同的物件。**

## new

有了原型鍊的概念之後，就不難理解 `new` 這個關鍵字背後會做的事情是什麼。

假設現在有一行程式碼是：`var nick = new Person('nick');`，那它有以下幾件事情要做：

1. 創出一個新的 object，我們叫它 O
2. 把 O 的 `__proto__` 指向 Person 的 prototype，才能繼承原型鍊
3. 拿 O 當作 context，呼叫 Person 這個建構函式
4. 回傳 O

用「函式建構子」來代表那個藍圖，再用 `new` 的運算子來執行函式建構式，會先建立一個空物件，同時將**該建構式中 prototype 這個屬性的內容 (car.prototype)，設置到該物件實例的 prototype 中 (myCar.**proto**)**。再產生出一個實體物件 (myCar、yourCar)

```jsx
// 建立函式建構子
function car(type, color, person){
  this.type = type;
  this.color = color;
  this.person = person;
}

// 之後用函式建構子來產生實體物件
var myCar = new car('電動車', '紅色', 4)
var yourCar = new car('貨車', '藍色', 2)
```

**函式建構子**裏面有一些屬性：

- 函式裏有 `prototype` 屬性，是一個空物件
- 這個 `prototype` 屬性裏面，再有 2 個屬性：
    1. `constructor` 屬性 (指回這一層它自己的建構函式，`A.prototype.constructor === A`)
    2. `__proto__` 屬性 (再找上一層的原型 (prototype) `object`)

`constructor` 屬性，就是**指回自己這個函式建構子的本身**，即是 `car` 這個函式。`__proto__` 屬性就是**這個函式再上一層的原型**，就是 `object`，因為 `function` 是屬於 `object` 型別。

**實體物件**的特別之處：

- 物件裏有 `__proto__`，裏面有：
    1. `constructor` 屬性 (指向上一層它的建構函式)
    2. `__proto__` 屬性 (再找上一層的原型 (prototype) ) `__proto__`裏面還要包多一個`__proto__`，這裏的 `__proto__` 是指向它的原型，就是`原型`的 `prototype`。

        所以 `實體.__proto__ === 原型.prototype`

    3. 它們都有同一個 `constructor` 屬性，因為它們都是由同一個函式建構子產生的。

**實體物件只有`__proto__`屬性**，不同於**建構函式同時擁有`__proto__`和`prototype`這兩個屬性**。實體物件的`__proto__`，會指向上一層的原型，即上一層的`prototype`，這個上一層的`prototype`會放著：

- `constructor` (指回這一層它自己的建構函式)
- `__proto__` (再找上一層的原型 (prototype) )
- 一些之前定義好的方法 (如有)

![https://i.imgur.com/brNPVuV.png](https://i.imgur.com/brNPVuV.png)
