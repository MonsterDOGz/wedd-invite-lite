(function(e){function t(t){for(var a,n,s=t[0],u=t[1],c=t[2],p=0,f=[];p<s.length;p++)n=s[p],l[n]&&f.push(l[n][0]),l[n]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);i&&i(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,s=1;s<r.length;s++){var u=r[s];0!==l[u]&&(a=!1)}a&&(o.splice(t--,1),e=n(n.s=r[0]))}return e}var a={},l={app:0},o=[];function n(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=a,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var i=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var a=r("64a9"),l=r.n(a);l.a},"56d7":function(e,t,r){"use strict";r.r(t);r("0fb7"),r("450d");var a=r("f529"),l=r.n(a),o=(r("10cb"),r("f3ad")),n=r.n(o),s=(r("f4f9"),r("c2cc")),u=r.n(s),c=(r("7a0f"),r("0f6c")),i=r.n(c),p=(r("eca7"),r("3787")),f=r.n(p),d=(r("425f"),r("4105")),m=r.n(d),b=(r("6611"),r("e772")),v=r.n(b),h=(r("1f1a"),r("4e4b")),g=r.n(h),y=(r("1951"),r("eedf")),w=r.n(y),x=(r("cadf"),r("551c"),r("f751"),r("097d"),r("2b0e")),k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"50px"}},[r("el-row",[r("el-col",{attrs:{xs:24,sm:6,md:6,lg:6,xl:6}},[r("el-form-item",{attrs:{label:"定语"}},[r("el-select",{on:{change:e.inputChange},model:{value:e.form.attWord,callback:function(t){e.$set(e.form,"attWord",t)},expression:"form.attWord"}},e._l(e.attOpts,function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1),r("el-col",{attrs:{xs:24,sm:6,md:6,lg:6,xl:6}},[r("el-form-item",{attrs:{label:"称呼"}},[r("el-input",{attrs:{placeholder:"称呼"},on:{input:e.inputChange},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),r("el-col",{attrs:{xs:24,sm:6,md:6,lg:6,xl:6}},[r("el-form-item",{attrs:{label:"称谓"}},[r("el-select",{attrs:{placeholder:"称谓（非必选）"},on:{change:e.inputChange},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}},e._l(e.titleOpts,function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1)],1),r("el-form-item",{attrs:{label:"预览"}},[r("el-input",{attrs:{placeholder:""},model:{value:e.preview,callback:function(t){e.preview=t},expression:"preview"}})],1),r("el-form-item",{attrs:{label:"长链"}},[r("el-input",{attrs:{placeholder:"长链"},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}},[r("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.url,expression:"url",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.copySucess,expression:"copySucess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.copyError,expression:"copyError",arg:"error"}],attrs:{slot:"append"},slot:"append"},[e._v("复制")])],1)],1),r("el-form-item",{attrs:{label:"短链"}},[r("el-input",{attrs:{placeholder:"短链"},model:{value:e.shortUrl,callback:function(t){e.shortUrl=t},expression:"shortUrl"}},[r("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.shortUrl,expression:"shortUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.copySucess,expression:"copySucess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.copyError,expression:"copyError",arg:"error"}],attrs:{slot:"append"},slot:"append"},[e._v("复制")])],1)],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.render}},[e._v("生成网址")]),r("el-button",{on:{click:e.reset}},[e._v("重置")])],1)],1)],1)},O=[],_=(r("7f7f"),r("bc3a")),U=r.n(_),$={name:"app",data:function(){return{token:"your_own_short_url_token",base:"http://127.0.0.1",attOpts:[{label:"尊敬的",value:1},{label:"亲爱的",value:2}],localOpts:[{label:"城市 A",value:"a"},{label:"城市 B",value:"b"}],titleOpts:[{label:"先生",value:1},{label:"小姐",value:2},{label:"女士",value:3}],form:{local:"a",attWord:1,name:"",title:null},url:"",shortUrl:"",preview:""}},methods:{inputChange:function(){var e=this,t=e.attOpts.filter(function(t){return t.value===e.form.attWord})[0].label,r=e.form.name,a="";e.form.title&&(a=e.titleOpts.filter(function(t){return t.value===e.form.title})[0].label),e.preview=t+r+a},render:function(){var e=this,t=e.attOpts.filter(function(t){return t.value===e.form.attWord})[0].label,r=e.form.name,a="";e.form.title&&(a=e.titleOpts.filter(function(t){return t.value===e.form.title})[0].label),e.url=e.base+"?a="+encodeURI(t)+"&n="+encodeURI(r)+"&t="+encodeURI(a),e.shortUrl=e.url;var l=JSON.stringify({url:e.url});U()({method:"post",url:"https://dwz.cn/admin/v2/create",headers:{token:e.token,"content-type":"application/json; charset=UTF-8"},data:l}).then(function(t){if(t&&t.data&&t.data)switch(t.data.Code){case 0:e.$message("生成网址成功！"),e.shortUrl=t.data.ShortUrl;break;case-1:e.$message("短网址生成失败");break;case-2:e.$message("长网址不合法");break;case-3:e.$message("长网址存在安全隐患");break;case-4:e.$message("长网址插入数据库失败");break;case-5:e.$message("长网址在黑名单中，不允许注册");break;default:break}}).catch(function(e){console.log("err",e)})},reset:function(){this.form={attWord:1,name:"",title:null},this.url="",this.shortUrl="",this.preview=""},copySucess:function(e){this.$message("复制成功！")},copyError:function(){this.$message("复制失败，请联系开发者！")}}},S=$,j=(r("034f"),r("2877")),N=Object(j["a"])(S,k,O,!1,null,null,null),W=N.exports,E=r("4eb5"),P=r.n(E);x["default"].config.productionTip=!1,x["default"].use(w.a),x["default"].use(g.a),x["default"].use(v.a),x["default"].use(m.a),x["default"].use(f.a),x["default"].use(i.a),x["default"].use(u.a),x["default"].use(n.a),x["default"].use(P.a),x["default"].prototype.$message=l.a,new x["default"]({render:function(e){return e(W)}}).$mount("#app")},"64a9":function(e,t,r){}});
//# sourceMappingURL=app.4ec678af.js.map