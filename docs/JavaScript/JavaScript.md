---
sidebar_position: 5
slug: First Post
authors: [zenzen]
tags: [程式]
---

# JavaScript 底層概述

## **JavaScript 的應用**

在瀏覽器上使用 JavaScript 能夠為網頁加入互動元素，與使用者進行互動，例如以下的一些例子：

- 操控及更新 HTML 和 CSS
- 依使用者的行為 (點擊按鈕、滑鼠滑動等行為) 作出反應
- 處理使用者輸入的資料，例如進行計算、寄存、進行驗證等等
- 傳送要求給伺服器，獲取資料以及更新網頁內容
- 控制 cookies

## **JavaScript 的限制**

為了保障使用者安全及隱私，在客戶端瀏覽器的 JavaScript 沒法做以下的事：

- 讀取或修改存放在使用者電腦的檔案，以及執行或複製在使用者的電腦裏的程式。例外是 JavaScript 能讀取在該網頁的 cookies。(只有在使用者同意的情況下才可以處理使用者的文件，例如使用者把他的文件拖放到網頁進行上傳的動作)
- 不能操控其他域名不同的網頁，也不能提取它的資料。即使使用者的瀏覽器同時開啟多個網頁，它們之間都不能干涉對方，提取對方在伺服器的資料。
- 某些與使用者的互動，例如電腦鏡頭、麥克風等，需要事先得到使用者的允許。

## **抓取 DOM 做操作**

當載入一個網頁時，瀏覽器會產生一個 DOM 去作解析，像樹狀圖一樣依序引伸去到不同的節點，並渲染到網頁上。在 JavaScript 的課題裏，我們經常都會操控某個 DOM 元素，例如經常會用`document.getElementById()`、`document.querySelector()` 抓取某個 DOM 元素來用。

## **渲染次序**

**瀏覽器從上到下的次序來執行程式碼**。通常我們都會把 JavaScript 檔案放在`</body>`前面，當瀏覽器跑完前面的 HTML 程式碼，才去跑 JavaScript 的檔案。

## **JavaScript 如何在瀏覽器運作？**

**JavaScript 引擎**是一種用於**將我們的代碼轉換為機器可讀語言的引擎**。它負責**使計算機理解我們編寫的 JS 代碼**。如果沒有JavaScript 引擎，您編寫的代碼對計算機來說簡直是一堆“胡言亂語”。

目前有多種 JavaScript 引擎在可供使用。它們也被稱為 **ECMAScript 引擎**，這樣叫的具體原因會在下文中提及。

在瀏覽器上執行 JavaScript 時，需要透過**瀏覽器本身附帶的 JavaScript 引擎**去進行解讀。下面是一些我們日常可能會用到的 JavaScript 引擎：例如 Chrome 和 Opera 用 V8 引擎，IE/Edge 用 Chakra 引擎。

## **JavaScript 引擎的內裡**

JavaScript 引擎它只是**分析我們的代碼並將其翻譯的另一種語言的工具**。**V8** 是最受歡迎的JavaScript 引擎之一，也是 **Chrome** 和 **NodeJS** 使用的引擎。它是用C++ (一種底層語言) 編寫的。為了**給這些引擎確立一個規範**，**ECMA** 的標準誕生了，該標準主要提供**如何編寫引擎和 JavaScript 所有功能的規範**。這就是新功能能在 ECMAScript 6、7、8 上實現的原因。同時，引擎也進行了更新以支持這些新功能。於是，我們便可以在開發過程中檢查了瀏覽器中 JS 高級功能的可用性。

### JavaScript Engine 內部的工作流程

<div style={{ display: 'flex' }}>
  <div>
    <ul style={{ marginTop: '1rem'}}>
      <li>語法解析器 (Parser)</li>
      <li>抽象語法樹 (AST)</li>
      <li>Interpreter 生成 ByteCode</li>
      <li>性能分析 (Profiler)</li>
      <li>Compiler 生成優化後的代碼</li>
    </ul>
  </div>
  <img src="https://i.imgur.com/kSGCP16.png" alt="Image" style={{width: '50%'}}/>
</div>


## **JavaScript 引擎工作流程解析**

1. 1.**Parser** 是一種通過各種 JavaScript 關鍵字來識別，分析和分類程序各個部分的解析器。它可以區分代碼是一個方法還是一個變數。
2. 2.**AST (抽象語法樹)** 基於 Parser 的分類構造樹狀結構。可以使用 [AST Explorer](https://astexplorer.net/) 查看該樹的結構。
3. 3.將 AST 提供給 **Interpreter** 生成 ByteCode。ByteCode 不是最底層的代碼，但可以被執行。在此階段，瀏覽器借助 V8 引擎執行 ByteCode 進行工作，因此用戶無需等待。
4. 4.同時，**Profiler** 將查找可以被優化的代碼，然後將它們傳遞給 **Compiler**。
5. 5.Compiler 生成優化代碼的同時，瀏覽器暫時用 ByteCode 執行操作。**一旦 Compiler 生成了優化代碼，優化代碼則將完全替換掉臨時的 ByteCode**。通過這種方式，可以充分利用 Interpreter 和 Compiler 的優點：Interpreter 執行代碼的同時，Profiler 尋找可以被優化的代碼，Compiler 則創建優化的代碼。然後，將 ByteCode 碼替換為優化後的較為底層的代碼，例如機器代碼。

### **直釋器 VS 編譯器**

通常，將代碼轉換成機器可讀語言的方法有兩種：

- **編譯型 (Compiled language)**

    程式碼在被執行前，**整個程式碼**會**先被編譯器轉成機器語言，再拿去執行**。若程式碼有錯，在**預先編譯的過程中會報錯**，而程式不會被執行。例子：Java，C++。

- **直譯型 (Interpreted language)**

    程式碼一行一行被執行，並**一行一行轉成機器語言**，整個過程是**一邊執行一邊進行編譯**。若程式碼有錯，程式碼仍然會被執行，**執行後才會回報錯誤**。例子：Python，PHP。

**JavaScript 普遍被介定為直譯型語言**，而非編譯型，當我們寫完一段 JavaScript 後，並不會馬上進行編譯，而是把我們寫和看得懂的 JavaScript (高階語言)，一行一行地被轉成機器看得懂的語言 (低階語言)，並且執行。

> 💡Interpreter 可以立即開始執行代碼，但不會進行優化。
> Compiler 雖然需要花費一些時間來編譯代碼，但是會生成對執行時更優的代碼。

因此，考慮到編譯器和直釋器的優缺點，如果我們同時利用兩者的優點，不是最好？這就是 **JIT (Just In Time)** Compiler 的用武之地。它是 **Interpreter 和 Compiler 的結合**，現在大多數瀏覽器都在更快、更高效地實現此功能。同時 V8 引擎也使用此功能。

## 關於 ByteCode

作為機器代碼，ByteCode 不能被所有計算機理解及執行。它仍然需要像**虛擬機**或像 **JavaScript V8 引擎**這樣的中間件才能將其轉換為機器可讀的語言。這就是為什麼我們的瀏覽器可以在上述 5 個階段中藉助 JavaScript 引擎在 Interpreter 中執行 ByteCode 的原因。
