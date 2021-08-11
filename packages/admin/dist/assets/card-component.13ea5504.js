import{W as n,d as e,e as t,h as o,t as a,s as d,b as r}from"./vendor.c4d80dea.js";import"./add-comment-rounded.17d660fc.js";import"./add-ic-call-rounded.2b045778.js";import"./admin-docs.5429a823.js";import"./index.a3de305c.js";import"./container.e914e81c.js";import"./___vite-browser-external_commonjs-proxy.5915cd82.js";var c=Object.defineProperty,i=Object.getOwnPropertyDescriptor;let l=class extends n{constructor(){super(...arguments),this.pickAction=n=>{const o=n.detail.action;"add-comment-rounded"===o.icon?(e("发送短信息..."),setTimeout((()=>{t()}),1e3)):"add-a-photo-rounded"===o.icon?(e("正在打开相机..."),setTimeout((()=>{t()}),1e3)):"add-ic-call-rounded"===o.icon&&(e("正在呼叫..."),setTimeout((()=>{t()}),1e3))},this.mdA='\n  ```html\n  // hoverable?: String,  设置阴影,默认为 \'true\' 鼠标移过时悬浮,\'always\'总是显示|\'true\'鼠标移过时悬浮|\'false\'从不显示\n\n  // bordered?:  Boolean, 设置边框,默认开启 bordered=true,关闭 bordered=false\n\n  // title?: String,      设置顶部标题,默认为\'\'\n\n  // actions?: any[],     设置底部按钮,例如：actions={ [{ icon: \'add-ic-call-rounded\' }] },\n  \n  // onChange?: (evt: any, index: number) => void    设置回调事件,例如onChange={this.pickAction}触发回调\n\n  //***特别注意：Card组件没有预设宽高，需在外部为容器设置宽高以达到理想效果。\n\n  \x3c!-- slot="cover" 若不填充内容，则header栏不显示。-简单卡片 --\x3e\n  <o-card hoverable="always" block="1">\n    <div slot="cover">\n    </div>\n      <p>Simple Card</p>\n      <p>Card content</p>\n      <p>Card content</p>\n  </o-card>\n  <o-card title="no border Card" hoverable="true" bordered={false} block="1">\n    <div slot="cover"></div>\n    <p>Simple Card</p>\n    <p>Card content</p>\n    <p>Card content</p>\n  </o-card>\n  ```\n  ',this.mdB='\n  ```html\n  \x3c!-- slot="extra" 填充内容，位置在header栏右侧。-slot="extra" 具名插槽 --\x3e\n  <o-card title="Default size card" hoverable="always" block="1">\n    <o-link\n      underline={false}\n      type="primary"\n      target="_blank"\n      href="https://tencent.github.io/omi/"\n      slot="extra">\n        More\n    </o-link>\n      <p>Card content</p>\n      <p>Card content</p>\n      <p>Card content</p>\n  </o-card>\n  <o-card title="no border card" hoverable="true" bordered={false} block="1">\n    <o-link\n      underline={false}\n      type="primary"\n      target="_blank"\n      href="https://tencent.github.io/omi/"\n      slot="extra"\n    >\n      More\n    </o-link>\n    <p>Card content</p>\n    <p>Card content</p>\n    <p>Card content</p>\n  </o-card>\n  ```\n  ',this.mdC='\n  ```html\n  \x3c!-- 通过onChange设置回调事件,例如onChange={this.pickAction}触发回调 --\x3e\n  \n  JSX:\n  // 结合 o-toast 展示\n  pickAction = (evt) => {\n    const btn = evt.detail.action\n    if(btn.icon === \'add-comment-rounded\') {\n      showLoading(\'发送短信息...\')\n      setTimeout(() => {\n        hideLoading()\n      }, 1000)\n    } else if (btn.icon === \'add-a-photo-rounded\') {\n      showLoading(\'正在打开相机...\')\n      setTimeout(() => {\n        hideLoading()\n      }, 1000)\n    } else if (btn.icon === \'add-ic-call-rounded\') {\n      showLoading(\'正在呼叫...\')\n      setTimeout(() => {\n        hideLoading()\n      }, 1000)\n    }\n  }\n\n  <o-card\n    title="Action card"\n    hoverable="always"\n    onChange={this.pickAction}\n    block="1"\n    actions={\n      [{icon: \'add-a-photo-rounded\'},\n      {icon: \'add-ic-call-rounded\'},\n      {icon: \'add-comment-rounded\'}]}>\n    <o-link\n      underline={false}\n      type="primary"\n      target="_blank"\n      href="https://tencent.github.io/omi/"\n      slot="extra">\n        More\n    </o-link>\n      <p>Card content</p>\n      <p>Card content</p>\n      <p>Card content</p>\n  </o-card>\n\n  <o-card\n    title="DNT\'s card"\n    onChange={this.pickAction}\n    block="1"\n    actions={[{icon: \'add-ic-call-rounded\'}]}\n    hoverable="true">\n    <o-avatar slot="extra">DNT</o-avatar>\n      <p>Tel:</p>\n      <p>Company:</p>\n      <p>...</p>\n  </o-card>\n  ```\n  ',this.mdD='\n  ```html\n  \x3c!-- slot="cover" 填充内容，将覆盖header栏。填充<o-image><o-image/>以完成相册卡片效果。  -slot="cover" 具名插槽 --\x3e\n  <o-card\n    onChange={this.pickAction}\n    actions={\n      [{icon: \'add-ic-call-rounded\'},\n      {icon: \'add-comment-rounded\'}]}\n      hoverable="always"\n      block="1">\n    <o-image\n      slot="cover"\n      src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb">\n    </o-image>\n    <div style="display: flex; justify-content: space-around; margin: 10px 0px">\n      <o-avatar style="margin: auto 0px;"\n        src="https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png">\n      </o-avatar>\n      <div>\n        <p style="font-weight: 600; font-size: 1.2em;">Card title</p>\n        <p>This is the description</p>\n      </div>\n    </div>\n  </o-card>\n\n  <o-card hoverable="true" block="1">\n    <o-image\n      slot="cover"\n      src="https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1199435000/VCG211199435578.jpg/thumb">\n    </o-image>\n      <p style="font-weight: 500>OMI Card</p>\n      <p><o-link\n        underline={false}\n        type="primary"\n        target="_blank"\n        href="https://tencent.github.io/omi/"\n        slot="extra">\n        Welcome to OMI\n      </o-link></p>\n  </o-card>\n  ```\n  '}installed(){}render(){const n={breakInside:"avoid",padding:"0 0 0 0"};return o("code-demo-container",null,o("code-demo",{title:"简单卡片",describe:"只包含内容区域",code:this.mdA,style:n,class:a`bg-green-50`},o("div",{slot:"demo",class:a`flex justify-around px-5 py-5`},o("div",{class:a`mt-2 mb-10 mx-2 h-36 w-60`},o("o-card",{title:"Simple Card",hoverable:"always",block:"1"},o("div",{slot:"cover"}),o("p",null,"Simple Card"),o("p",null,"Card content"),o("p",null,"Card content"))),o("div",{class:a`mt-2 mb-10 mx-2 h-36 w-60`},o("o-card",{title:"Simple Card",hoverable:"true",block:"1",bordered:!1},o("div",{slot:"cover"}),o("p",null,"no border Card"),o("p",null,"Card content"),o("p",null,"Card content"))))),o("code-demo",{title:"功能卡片",describe:"支持底部栏添加触发事件(o-icon)",code:this.mdC,style:n},o("div",{slot:"demo",class:a`flex justify-around px-5 py-5`},o("div",{class:a`mt-2 mb-10 mx-5 h-56 w-72`},o("o-card",{block:"1",title:"Action card",hoverable:"always",onChange:this.pickAction,actions:[{icon:"add-a-photo-rounded"},{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}]},o("o-link",{underline:!1,type:"primary",target:"_blank",href:"https://tencent.github.io/omi/",slot:"extra"},"More"),o("p",null,"Card content"),o("p",null,"Card content"),o("p",null,"Card content"))),o("div",{class:a`mt-2 mb-10 mx-5 h-56 w-72`},o("o-card",{block:"1",title:"DNT's card",onChange:this.pickAction,actions:[{icon:"add-ic-call-rounded"}],hoverable:"true"},o("o-avatar",{slot:"extra"},"DNT"),o("p",null,"Tel:"),o("p",null,"Company:"),o("p",null,"..."))))),o("code-demo",{title:"典型卡片",describe:"包含标题、内容、操作区域(extra)",code:this.mdB,style:n,class:a`bg-green-50`},o("div",{slot:"demo",class:a`flex justify-around px-5 py-5`},o("div",{class:a`mt-2 mb-10 mx-5 h-36 w-72`},o("o-card",{title:"Default size card",hoverable:"true",block:"1"},o("o-link",{underline:!1,type:"primary",target:"_blank",href:"https://tencent.github.io/omi/",slot:"extra"},"More"),o("p",null,"Card content"),o("p",null,"Card content"),o("p",null,"Card content"))),o("div",{class:a`mt-2 mb-10 mx-5 h-36 w-72`},o("o-card",{title:"no border card",hoverable:"true",bordered:!1,block:"1"},o("o-link",{underline:!1,type:"primary",target:"_blank",href:"https://tencent.github.io/omi/",slot:"extra"},"More"),o("p",null,"Card content"),o("p",null,"Card content"),o("p",null,"Card content"))))),o("code-demo",{title:"相册卡片",describe:"支持封面、头像、标题和描述信息的卡片",code:this.mdD,style:n},o("div",{slot:"demo",class:a`flex justify-around px-5 py-5`},o("div",{class:a`mt-2 mb-10 mx-5 h-80 w-72`},o("o-card",{block:"1",onChange:this.pickAction,title:"Action card",actions:[{icon:"add-ic-call-rounded"},{icon:"add-comment-rounded"}],hoverable:"always"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1190188000/VCG41N1127233809.jpg/thumb"}),o("div",{style:"display: flex; justify-content: space-around; margin: 10px 0px"},o("o-avatar",{style:"margin: auto 0px;",src:"https://wx.gtimg.com/resource/feuploader/202108/fb85c997c6476acd7a1441043fdda775_204x204.png"}),o("div",null,o("p",{style:"font-weight: 600; font-size: 1.2em;"},"Card title"),o("p",null,"This is the description"))))),o("div",{class:a`mt-2 mb-10 mx-5 h-80 w-72`},o("o-card",{block:"1",hoverable:"true"},o("o-image",{slot:"cover",src:"https://cdc-old-dcloud-migrate-1258344706.cos.ap-guangzhou.myqcloud.com/data2/material/thumb/1/1199435000/VCG211199435578.jpg/thumb"}),o("p",null,"OMI Card"),o("p",null,o("o-link",{underline:!1,type:"primary",target:"_blank",href:"https://tencent.github.io/omi/",slot:"extra"},"Welcome to OMI")))))))}};l.css=d.target,l=((n,e,t,o)=>{for(var a,d=o>1?void 0:o?i(e,t):e,r=n.length-1;r>=0;r--)(a=n[r])&&(d=(o?a(e,t,d):a(d))||d);return o&&d&&c(e,t,d),d})([r("card-component")],l);export{l as default};
