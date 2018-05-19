# NasVoucher: 星云兑换券

[![Build Status](https://travis-ci.org/kun368/NasVoucher.svg?branch=master)](https://travis-ci.org/kun368/NasVoucher)
[![Language](https://img.shields.io/badge/language-javascript-blue.svg)](https://github.com/kun368/NasVoucher)
[![ice](https://img.shields.io/badge/developing%20with-ICE-2077ff.svg)](https://github.com/alibaba/ice)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/kun368/NasPasteBin)

#### [系统地址](http://will.zzkun.com)

#### [NAS-DAPP开发者注册](https://incentive.nebulas.io/cn/signup.html?invite=OILxo)

## 简介

**NasVoucher是基于NAS智能合约的去中心化兑换券平台, 致力于构建增进情侣、朋友、亲人之间信任的新一代诺言兑换保存平台**

情侣、朋友间维护增进感情的神器。口头约定？许下承诺？打个欠条？不如发一张兑现券。以后再有人说下次请你吃饭，麻烦把这个DApp丢给Ta。

## Snapshot


## Nebulas智能合约

```typescript
'use strict';


class Vouncher {

  title = '';
  from = '';
  to = '';
  content = '';
  remark = '';
  txHash = '';
  time = 0;


  constructor(text) {
    if (!text) {
      return;
    }
    const o = JSON.parse(text);
    this.title = o.title;
    this.from = o.from;
    this.to = o.to;
    this.content = o.content;
    this.remark = o.remark;
    this.txHash = o.txHash;
    this.time = o.time;
  }

  toString() {
    return JSON.stringify(this);
  }
}


const NasVoucher = function () {
  LocalContractStorage.defineMapProperty(this, 'sendMap');
  LocalContractStorage.defineMapProperty(this, 'recvMap');
};

NasVoucher.prototype = {
  init: function () {
  },

  _push(collectionName, key, value) {
    let item = this[collectionName].get(key);
    if (!item) {
      item = { addr: key, arr: [] };
    }
    item.arr.push(value);
    this[collectionName].put(key, item);
  },

  create: function (to, title, content, remark) {
    const item = new Vouncher();
    item.title = title;
    item.from = Blockchain.transaction.from;
    item.to = to;
    item.content = content;
    item.remark = remark;
    item.txHash = Blockchain.transaction.hash;
    item.time = Blockchain.transaction.timestamp * 1000;
    this._push('sendMap', item.from, item);
    this._push('recvMap', item.to, item);
    return item;
  },

  query: function () {
    const from = Blockchain.transaction.from;
    let send = this.sendMap.get(from);
    let recv = this.recvMap.get(from);
    if (!send) {
      send = { addr: from, arr: [] };
    }
    if (!recv) {
      recv = { addr: from, arr: [] };
    }
    return { send: send, recv: recv };
  }
};
module.exports = NasVoucher;
```

---

> 使用文档

使用:

* 启动调试服务: `npm start`
* 构建 dist: `npm run build`

目录结构:

* react-router @4.x 默认采用 hashHistory 的单页应用
* 入口文件: `src/index.js`
* 导航配置: `src/menuConfig.js`
* 路由配置: `src/routerConfig.js`
* 路由入口: `src/router.jsx`
* 布局文件: `src/layouts`
* 通用组件: `src/components`
* 页面文件: `src/pages`
