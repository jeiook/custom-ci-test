(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(8),s=n.n(a),i=n(2),o=n(3),u=n(6),d=n(5),l=n(4),p=function(){var e=!1,t=function(e,t,r,c){e.onreadystatechange=t?function(){if(4===this.readyState){var t=n(e.response);console.log("status: ".concat(this.status,";\n            ").concat(c," response: ").concat(JSON.stringify(t))),r(t)}}:function(){4===this.readyState&&r(n(e.response))}},n=function(e){return"string"==typeof e?JSON.parse(e):e};return{post:function(n,r){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){},a=new XMLHttpRequest;a.open("POST",r),a.setRequestHeader("Content-Type","application/json"),t(a,e,c,"get"),a.send(n)},get:function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){},c=new XMLHttpRequest;c.open("GET",n),t(c,e,r,"get"),c.send()}}}(),j=n(0),b=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"getList",value:function(e){var t=this;return e.map((function(e){return t.getItem(e)}))}},{key:"getItem",value:function(e){return Object(j.jsx)("option",{value:e,children:e},e)}},{key:"render",value:function(){var e=this.props,t=e.name,n=e.id,r=e.itemList;return Object(j.jsx)("select",{name:t,id:n,children:this.getList(r)})}}]),n}(r.Component),m=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={name:"",budget:"",product:"",volume:""},r.products=["fridge"],r.search=r.search.bind(Object(u.a)(r)),r.app=r.props.App,r}return Object(o.a)(n,[{key:"isNewUser",value:function(){return!0}},{key:"search",value:function(){var e=document.getElementById("name").value,t=document.getElementById("budget").value,n=document.getElementById("product").value,r=document.getElementById("volume").value;if(e&&!isNaN(t)&&Number(t)>0&&n&&(!r||r&&!isNaN(r)&&Number(r)>0)){r=r?Number(r):-1;var c={name:e,budget:Number(t),product:n,volume:r};this.setState(c),this.app.search(c)}else alert("You need to enter something in the first three fields (and have a positive number for the budget, and also for the volume if you have entered a value for it)")}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"home modal flex-col card",children:[Object(j.jsx)("h1",{id:"welcome",children:"Search Efficient Products"}),Object(j.jsx)("label",{htmlFor:"name",children:"Name"}),Object(j.jsx)("input",{type:"text",id:"name",name:"name",required:!0,minLength:"2"}),Object(j.jsx)("label",{htmlFor:"budget",children:"Budget"}),Object(j.jsx)("input",{type:"number",id:"budget",name:"budget",required:!0,min:"0"}),Object(j.jsx)("label",{htmlFor:"product_type",children:"product type"}),Object(j.jsx)(b,{name:"product_type",id:"product",itemList:this.products}),Object(j.jsxs)("label",{htmlFor:"budget",children:["Volume Threshold in ft",Object(j.jsx)("sup",{children:"3"})," (optional)"]}),Object(j.jsx)("input",{id:"volume",name:"volume",min:"1"}),Object(j.jsx)("button",{id:"submit",onClick:this.search,children:"Search"})]})}}],[{key:"updateHomeForm",value:function(e){var t=e.name,n=e.budget,r=e.product,c=e.volume;document.getElementById("name").value=t,document.getElementById("budget").value=n,document.getElementById("product").value=r;var a=c;c<0&&(a=""),document.getElementById("volume").value=a}}]),n}(r.Component),h=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.usage,n=e.mostEff;return Object(j.jsxs)("div",{className:"product-eff flex-row",children:[Object(j.jsxs)("div",{className:"energy-info dark card",children:["Energy Usage: ",t," kWh/y"]}),Object(j.jsxs)("div",{className:"energy-info card",children:[Object(j.jsx)("a",{href:"https://www.energystar.gov/products/most_efficient",children:"Most Efficient (Energy Star)"}),": ",n]})]})}}]),n}(r.Component),f=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.item,t=e.energy_usage,n=e.modelNumber,r=e.most_efficient,c=e.name,a=e.regularPrice,s=e.url;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"result modal flex-col-left card",children:[Object(j.jsx)("h2",{children:c}),Object(j.jsxs)("h3",{children:["model: ",n]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("p",{className:"product-price",children:["$",a]}),Object(j.jsxs)("p",{className:"product-link",children:["Link to product: ",Object(j.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",children:s})]})]}),Object(j.jsx)(h,{usage:t,mostEff:r})]})}}]),n}(r.Component),v=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).app=r.props.app,r}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"back card",onClick:this.app.goToHome,children:Object(j.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Ic_arrow_back_48px.svg/1024px-Ic_arrow_back_48px.svg.png",alt:"go back"})})}}]),n}(r.Component),O=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).app=r.props.App,r}return Object(o.a)(n,[{key:"render",value:function(){var e=this.app.state.product;return e?Object(j.jsxs)("div",{className:"search flex-col",children:[Object(j.jsx)(v,{app:this.app}),Object(j.jsx)("h1",{children:"Our Recommendation"}),Object(j.jsx)("div",{children:Object(j.jsx)(f,{item:e},e)})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)(v,{app:this.app}),Object(j.jsx)("div",{className:"search modal card",children:Object(j.jsx)("p",{children:"Unfortunately, we couldn't find the best product"})})]})}}]),n}(r.Component),g=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"loading flex-col",children:Object(j.jsx)("p",{children:"Finding the Best Product..."})})}}]),n}(r.Component),x=(n(14),function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={Page:m,product:null,userData:{name:"",budget:"",product:"",volume:""}},r.search=r.search.bind(Object(u.a)(r)),r.goToHome=r.goToHome.bind(Object(u.a)(r)),r}return Object(o.a)(n,[{key:"debug",value:function(){return!1}},{key:"search",value:function(e){var t=this;this.debug()?this.setState({Page:O,product:{energy_usage:100,modelNumber:"123Test",most_efficient:"No",name:"Test Product",regularPrice:"100",url:"./this_is_a_fake_link.com"},userData:e}):(p.post(JSON.stringify(e),"/api/visitors",(function(e){t.setState({Page:O,product:e})})),this.setState({Page:g,userData:e}))}},{key:"goToHome",value:function(){var e=this;this.setState({Page:m,product:null},(function(){m.updateHomeForm(e.state.userData)}))}},{key:"render",value:function(){var e=this.state.Page;return Object(j.jsx)(e,{App:this})}}]),n}(r.Component));s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.9294fecd.chunk.js.map