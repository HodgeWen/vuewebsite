# 设计模式
很多人在日常coding中或多或少地已经使用考虑设计模式，
设计模式实际上是对编码经验的一些总结，本文将使用js来实现常用的设计模式在js中的实现以及案例

## 1.策略模式
简单来说 策略模式就是将所有的对象共有的特征和不同的特征分离，其中不同的特征抽出来封装在一个单独的集合中维护    
之前写过一个后台管理系统，由于某个功能模块涉及到大量的表单字段，并且没有得到解耦，让我很是头疼
需求：在A、B、C三个不同的平台投放广告，他们都需要上传的表单数据有：广告标题，广告内容, 平台代号 ，不同的是
A平台的广告起价是50，B平台的广告起价是70，c平台的广告起价是60

``` js
/* 数据模型 */
const platform = {
  A: {
    price: 50
  },
  B: {
    price: 70
  },
  C: {
    price: 60
  }
}

const compose = function (plat) {
  // 通用字段
  const common = {
    title: '', 
    content: '',
    platcode: ''
  }
  return Object.assign(common, plat)
}

const form_a = compose(platform.A) // A平台
const form_b = compose(platform.B) // B平台
const form_c = compose(platform.C) // C平台
```
下面是非策略模式的写法
``` js
const compose = function (plat) {
  const form = {
    itle: '', 
    content: '',
    platcode: ''
  }

  if (plat === 'A') {
    form.price = 50
  }
  if (plat === 'B') {
    form.price = 70
  }
  if (plat === 'C') {
    form.price = 60
  }
  return form
}

const form_a = compose('A') // A平台
const form_b = compose('B') // B平台
const form_c = compose('C') // C平台
```
以上两段代码爱业务非常简单的时候，看起来并无太大差别，
但是如果现在需要修改代码，比如现在A平台的价格变了，或者增加了一个D平台，
使用策略模式使得你可以在策略组中修改单个策略或者添加一个策略，而不使用策略模式，则需要你去
修改compose方法内部，长此以往，该函数会变得极其庞大不易维护，不但不够灵活，执行效率上也会降低  
那些地方需要用到策略模式？  
很多，比如说表单规则校验，事件委托(始终记住,把可能需要维护的东西抽出来，单独维护)
``` js
// 事件委托
// 策略
const func = {
  li () {
    console.log('li被点击了')
  }
}
document.querySelector('ul').addEventListener('click', e => {
  const isTarget = func[e.target.tagName]
  isTarget && isTarget()
})
```

## 2.迭代器模式
es中内置了很多迭代函数，比如forEach,map,filter,some,reduce,every 
在某种程度上来说，使用迭代函数可以完全放弃掉for循环了,实现给数组每项加1，比较以下代码
``` js
const arr = [1, 2, 3, 4]

// 普通版本
const arr1 = []
for (let i = 0, len = arr.length;i < len; i++) {
  arr1[i] = arr[i] + 1
}
// 函数版本
const arr2 = arr.map(v => v + 1)

```