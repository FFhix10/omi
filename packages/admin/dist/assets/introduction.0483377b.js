var n="## Omiu 是什么？\n\nOmiu 是基于 [Omi](https://github.com/Tencent/omi) 开发的跨框架 UI 组件库，输出标准 Web Components 的 Custom Elements，任意组件可以同时在 React、Vue、Preact、Omi 或者原生 JS 等任意框架或无框架中使用，非常方便。总体来看，Omiu 有这些特性:\n\n> [Omiu Codepen 合集](https://codepen.io/collection/XBJjke)\n\n* 跨框架使用\n* 集成 MUI [海量 ICON](https://tencent.github.io/omi/components/icon/demos/icon.html)\n* 移动端和 PC 共用一套组件\n* 运行时的主题切换支持(颜色、字体和圆角)\n* 组件直接解耦，独立打磨，独立发布，独立引用\n* 扩展了 HTML 能力，你可以通过字符串 `'0'` 或者字符串 `'false'` 传递 false 给元素\n\n## 使用指南\n\n### 通过 script\n\n```html\n<script src=\"https://unpkg.com/omi\"><\/script>\n<script src=\"https://unpkg.com/@omiu/button\"><\/script>\n\n<o-button>I am button</o-button>\n```\n\n### 通过 npm\n\n``` bash\nnpm install @omiu/button\n```\n\n然后导入（自动全局注册）:\n\n```js\nimport '@omiu/button'\n```\n\n然后在任意框架中使用，比如 Omi, React, Vue or Angular:\n\n``` html\n<o-button>I am button</o-button>\n```\n\n也可以原生 JS 使用：\n\n```js\nvar button = document.createElement('o-button')\nbutton.innerHTML = 'I am omiu button'\ndocument.body.append(button)\nbutton.addEventListener('click', function () {\n  console.log('Clicked!')\n})\n\n//or\n//document.body.innerHTML = '<o-button>I am omiu button</o-button>'\n```\n\n## HTML 扩展 \n\n当默认值为 true，需要传递 false 给 element 的时候，以前是历史难题，Omi 完美解决了这一点，你可以通过字符串 `'0'` 或者 字符串 `'false'` 来设置。\n\n```js\ndefine('my-element', class extends WeElement {\n  static defaultProps = {\n    show: true\n  }\n\n static propTypes = {\n    show: Boolean\n  }\n\n  render(props) {\n    ...\n    ...\n  }\n})\n```\n\nUse:\n\n```html\n<my-element show=\"false\"></my-element>\n```\n\nor\n\n```html\n<my-element show=\"0\"></my-element>\n```\n\n## React 中使用 omiu\n\n```tsx\nimport { useState } from 'react'\nimport '@omiu/icon-button'\n\nexport default function SomeComponent(props) {\n    const [result, setSwitch] = useState(false)\n\n    return (\n      <div>\n        <p>The switch is {result ? 'on' : 'off'}</p>\n        {//使用 addEventListener 绑定自定义事件}\n        <o-icon-button color=\"red\" icons=\"['favorite', 'favorite_border']\">\n        </o-icon-button>\n      </div>\n    )\n}\n```\n\n\n## Vue 中使用 Omiu\n\n```html\n<script>\nimport '@omiu/icon-button'\n\nexport default {\n  name: 'HelloWorld',\n  data: function() {\n    return {\n      result: false\n    }\n  },\n  methods: {\n    myEvent: function(evt) {\n      this.result = evt.detail.isOn\n    }\n  }\n}\n<\/script>\n\n<template>\n  <div class=\"component\">\n    <p>The switch is {{result? 'on' : 'off'}}</p>\n    <o-icon-button color=\"red\" icons=\"['favorite', 'favorite_border']\" @change=\"myEvent\"></o-icon-button>\n  </div>\n</template>\n```\n\n## 事件触发和绑定最佳实践\n\n由于需要跨框架，在事件绑定上为了统一组件行为这里给除了组件开发和使用的最佳实践。Omiu 组件的事件触发统一使用小写的形式：\n\n```js\nthis.fire('change')\nthis.fire('my-event')\n```\n\n在 Omi 中进行对应的事件绑定:\n\n```jsx\n<my-ele onChange={this.changeHandler} onMyEvent={this.myEventHandler}></my-ele>\n```\n\n在 Preact 中进行对应的事件绑定:\n\n```jsx\n<my-ele onchange={this.changeHandler} onmy-event={this.myEventHandler}></my-ele>\n```\n\n在 Vue 中进行对应的事件绑定:\n\n```html\n<my-ele @change=\"changeHandler\" @my-event=\"myEventHandler\"></my-ele>\n```\n\n在 React 和 JS 中进行对应的事件绑定:\n\n```jsx\nmyEl.addEventListener('my-event', (evt) => {})\n```\n\n## 贡献\n\n### 一些命令\n\nBuild 组件:\n\n```bash\nnpm run build \n```\n\nBuild 例子:\n\n```bash\nnpm start\n```\n\n生成文档:\n\n```bash\nnpm run docs\n```\n\n发布:\n\n```bash\nnpm publish --access public\n```\n";export{n as default};
