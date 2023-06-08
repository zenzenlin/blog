---
sidebar_position: 9
authors: [zenzen]
tags: [程式]
---
# Categories of Operators

## **運算子**

JavaScript中有三種類別的運算子：

- 一元運算子 (Unary Operator)
- 二元運算子 (Binary Operator)
- 三元運算子 (Ternary Operator)

### **一元運算子**

這些運算子作用於一個運算元（值），也就是作用於單個值上。例如  **`typeof`** **-**（減號）、**!**（驚嘆號）等。 **`typeof`** 關鍵字會返回一個字符串值，表示所提供值的類型。

```jsx
console.log(typeof 3) // Number
console.log(typeof "") // String
console.log(-10) // -10
console.log(!true) // false
```

### **二元運算子**

這些運算子作用於兩個運算元（值）。大部分的運算子都屬於這個類別。你可能已經很熟悉其中一些。例如 +（加號）、-（減號）等。

```jsx
console.log(2 + 2) // 4
console.log(3 - 1) // 2
console.log(1 - 2) // -1
```

### **三元運算子**

這些運算子作用於三個運算元（值）。你可能已經聽說過這個術語了。你猜對了... 就是問號（**?**）和冒號（:）。目前為止，這是唯一具有這種功能的運算子。我們稍後在本文中會了解它的運作方式。

```jsx
console.log(true ? "JavaScript" : "Java") // JavaScript
```

## **運算子的類型**

以下是我將要討論的幾種運算子。這些並不是全部的運算子類型。

- 算術運算子 (Arithmetic)
- 邏輯運算子 (Logical)
- 比較運算子 (Comparison)
- 條件運算子 (Conditional)

### **算術運算子**

```
💡 這些運算子執行數學運算。
```

這包括加法（`+`）、減法（`-`）、除法（`/`）和乘法（`*`）。如果你有基礎的數學知識，你應該對這些符號及其意義很熟悉，但還有其他一些算術符號具有你不知道的功能。

字串也可以使用 `+` 符號。這稱為**字串連接**。

```jsx
console.log("Why" + "me") // Whyme，如果需要空格，你必須手動添加。
console.log("Why" + " me") // Why me
```

例如，如果你想找到除法運算的餘數，或者想從浮點數（十進制數字，**JavaScript 沒有這種類型**）中獲得整數（整數部分）。我們還有**餘數運算子**（`%`）和**取整運算子**（`//`）。

**取整運算子**（Floor operator）是雙斜線（`//`），它忽略小數點後的任何值，無論該值是否大於0.5或小於0.5。

```jsx
console.log(3.5) // 3
console.log(5.2) // 5
```

**餘數運算子**（Modulus operator）是百分比（`%`）符號，返回除法運算的餘數。這在你想知道一個數字是奇數還是偶數時很有用。

```jsx
console.log(3 % 2) // 1
console.log(5 % 3) // 2
```

### **邏輯運算子**

```
💡 這些運算子用於操作**布林值**（boolean values）。
```

它們包括與（**and**）、或（**or**）和非（**not**）。在 JavaScript 中，它們用符號表示。因此，與（`&&`）、或（`||`） 和非（`!`）。

**&&** 運算子代表邏輯與。它是一個二元運算子（作用於兩個值），只有在兩個值都為 true 時才返回 true。

```jsx
console.log(false && false) // true
console.log(true && false) // false
console.log(2 < 4 && 3 > 4) // false
console.log(2 >= 4 || 8 == 8) // true
console.log(9 == "9" || 8 > 19) // true
console.log(9 === "9" && 4 > 5) // false
```

### **比較運算子**

```
💡 大於符號（>）和小於符號（<）是傳統的「大於」和「小於」符號。
```

它們是二元運算子。應用它們會得到一個布林值，指示它們在這種情況下是否成立。字串可以以相同的方式進行比較。

```jsx
console.log(2 < 4) // true
console.log(2 > 4) // false
console.log(4 >= 6) // false
console.log(5 <= 8) // true
```

### **條件運算子**

這個運算子是一個三元運算子（作用於三個值）。它用一個問號和一個冒號來表示。它的工作方式是，如果條件為真，返回問號前面的值，否則返回冒號後面的值。

```jsx
console.log(false ? "Python" : "JavaScript") // JavaScript
```

這是一種簡單的條件語句的書寫方式，它沒有其他條件。

不要使用嵌套的三元運算子。

不要在三元運算子內進行賦值操作。

```
💡 盡量保持三元運算子的簡潔和可讀性。
```
