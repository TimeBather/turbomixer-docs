# 引言
<hr>

::: tip
本篇指南旨在向有一定 Node.js和JavaScript 开发基础的人介绍 **用于开发 TurboMixer 扩展** 的知识。如果你只想 **使用 TurboMixer** 而非 为TurboMixer开发扩展，请前往 [使用](../manual/) 。
:::

## 预备知识

TurboMixer 是一个基于 Node.js 的可视化编程框架，因此我们假定你已经拥有了一定的 JavaScript 和 Node.js 开发基础。如果你对自己的基础不自信，可以参考下面的两篇教程：

- [JavaScript 语言概览](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Language_Overview)
- [现代 JavaScript 教程](https://zh.javascript.info/)

### 关于 TypeScript

TypeScript 是 JavaScript 的超集，前者在后者的基础上额外提供了强大的类型系统，可以让你的代码更加健壮，开发也更加快捷。Koishi 本身就是用 TypeScript 编写的，因此我们推荐你使用 TypeScript 来进行 Koishi 开发。如果你对 TypeScript 不熟悉，这里有一篇 [TypeScript 教程](https://www.typescriptlang.org/zh/docs/handbook/typescript-in-5-minutes.html)。

本篇指南中的所有代码示例都使用了 TypeScript。这对于插件开发者来说这并不是必需的。如果你不想用 TypeScript 来开发插件，你可以自行忽略那些类型标注，并使用原生 JavaScript 或其他方言来编写代码。

## 让我们开始吧！

继续向下滚动，你将在每一页的底部看到前往下一节的链接。
