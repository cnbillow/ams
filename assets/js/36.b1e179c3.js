(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1019:function(e,o,t){"use strict";t.r(o);var n=t(126),i={defaultComponent:{type:"component",options:{is:"img"},style:{width:"200px",height:"200px"},props:{src:"//b.appsimg.com/upload/vivaadmin/2018/11/07/69/1541579376290922128.png"}},divComponent:{type:"component",options:{is:"div",text:"我是插进来的TEXT内容",html:"<h3>我是插进来的HTML内容</h3>"}},divElComponent:{type:"component",options:{is:"div"},style:{padding:"100px"},operations:{test:{type:"button",label:"提交"}},actions:{test:function(){this.$message("你点击了提交按钮")}},blocks:{testBlockComponent:{type:"component",options:{is:"el-rate"},props:{value:4}}}}},s=t(138),a=t.n(s),c=t(137),l=t.n(c),d={mixins:[n.a],mounted:function(){var e=a()(i[this.blockName]);this.configCode=l()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block(this.blockName,i[this.blockName]),this.init=!0)}},p=t(1),r=Object(p.a)(d,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?t("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),t("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[t("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),t("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[t("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?t("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);o.default=r.exports},125:function(e,o,t){"use strict";var n=t(0),i=(t(131),t(130)),s=t.n(i),a=t(128),c=t.n(a),l=t(136),d=t(132),p=t.n(d),r=(t(133),t(134)),m=t.n(r),u=t(135),f=t.n(u);n.default.use(s.a),n.default.use(c.a),console.log("ams init config"),n.default.use(m.a),n.default.use(f.a),"undefined"!=typeof window&&(window.Vue=n.default),n.default.use(l.a,{languages:{javascript:p.a}}),c.a.config({resource:{api:{withCredentials:!1}}})},126:function(e,o,t){"use strict";t(125);o.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}}}]);