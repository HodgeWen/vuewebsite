# 代码规范

在任何开发中，代码规范永远是绕不过的一个环节，好的代码不仅能够给自己
带来心情上的愉悦，还能降低维护成本，提高编程效率。

## 为什么在开发过程中要讲究代码规范
也许这种问法并不新鲜，那换个问法，为什么很多人在开发过程中不讲究代码的规范？
- 没有一个统一的标准
- 写的时候觉得按照规范太麻烦
- 没有体验过维护那种看不懂的代码

看看下面这段代码 ↓
``` js
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Player=t():e.Player=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){}]).default});
```
经常使用webpack的人一眼就可以看出这是webpack打包后的用于生产环境的压缩代码，你用凡人之躯去看就等于是在逆天，当然再不注意代码规范的人也不可能写出这样的代码，但是这也从侧面说明了，你的代码一旦不够规范，别人读你的代码可能读一点就不想读下去了。  
因此代码规范这种人云亦云的东西，只有你自己完全受益了，你才会完全去接受它，或者，是你们公司强迫要求你这么做的。

## 误区
代码规范不仅仅是命名的规范，结构规范更是重中之重。例如:  
- js中尽可能的将变量声明在函数首部, 尽管在es6出现了[let和const](http://es6.ruanyifeng.com/#docs/let)让变量变得更加可靠,但是一个复杂的作用域中，当你需要对一个变量做出一些改变，你可以迅速定位到它。
- 尽量不要让函数依赖外部的变量，尤其是全局环境中,注意是尽量，在一些闭包的应用中(典型的构造函数私有方法和属性)这是一个灵活的玩法。
``` js
// 可用示例
function Count() {
  let num = 0
  // 该方法依赖于num变量
  this.add = function (n) {
    num += n
    return num
  }
}
let count = new Count
count.add(2) // 2
count.add(3) // 5

// 错误示例
let num = 0
function add (n) {
  num += n
  return num
}
add(2) // 2
num = -2 // 变量遭到修改
add(2) // 0 期望值是4 
```
- ...