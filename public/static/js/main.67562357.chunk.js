(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{64:function(t,e,n){},65:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),c=n(14),s=n.n(c),u=n(3),i=n(12),o=n(4),d=n(7),p=n(5),l=n(0);function j(t){return Object(l.jsx)("div",{className:"add-button button",onClick:function(e){e.preventDefault(),t.showAddModal?t.setShowAddModal(!1):t.setShowAddModal(!0)},children:Object(l.jsx)("button",{children:"ADD"})})}var b=n(2),f=n.n(b),h=n(6),O=n(11),m=n.n(O);m.a.defaults.baseURL="http://localhost:3001";var x={createProducts:function(){return v.apply(this,arguments)},createCart:function(){return S.apply(this,arguments)},createSales:function(){return g.apply(this,arguments)},createUniqueSales:function(){return w.apply(this,arguments)},makeId:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<t;r++)e+=n.charAt(Math.floor(Math.random()*n.length));return e},_save:function(t,e){return y.apply(this,arguments)},_load:D,updateProduct:function(t){return A.apply(this,arguments)},addProduct:function(t){return T.apply(this,arguments)},deleteProduct:function(t){return E.apply(this,arguments)},addToCart:function(t){return N.apply(this,arguments)},emptyCart:function(){return P.apply(this,arguments)},buyCartSales:function(){return k.apply(this,arguments)},buyCartUniqueSales:function(){return M.apply(this,arguments)}};function v(){return(v=Object(h.a)(f.a.mark((function t(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D("products");case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(){return(S=Object(h.a)(f.a.mark((function t(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D("cart");case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(){return(g=Object(h.a)(f.a.mark((function t(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D("sales");case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(){return(w=Object(h.a)(f.a.mark((function t(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D("unique_sales");case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(){return(y=Object(h.a)(f.a.mark((function t(e,n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return localStorage.setItem(e,JSON.stringify(n)),t.abrupt("return",Promise.resolve(n));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function D(t){return C.apply(this,arguments)}function C(){return(C=Object(h.a)(f.a.mark((function t(e){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("/"+e);case 2:return n=t.sent,t.abrupt("return",Promise.resolve(n.data));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function A(){return(A=Object(h.a)(f.a.mark((function t(e){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.put("/product",e);case 2:return t.next=4,D("products");case 4:return n=t.sent,t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(){return(T=Object(h.a)(f.a.mark((function t(e){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.post("/product",e);case 2:return t.next=4,D("products");case 4:return n=t.sent,t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(){return(E=Object(h.a)(f.a.mark((function t(e){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.delete("/product/"+e._id);case 2:return t.next=4,D("products");case 4:return n=t.sent,t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(){return(N=Object(h.a)(f.a.mark((function t(e){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return delete e._id,t.next=3,m.a.post("/cart_item",e);case 3:return t.next=5,D("cart");case 5:if(t.t0=t.sent,t.t0){t.next=8;break}t.t0=[];case 8:return n=t.t0,t.abrupt("return",n);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function P(){return P=Object(h.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D("cart");case 2:return t.sent.forEach(function(){var t=Object(h.a)(f.a.mark((function t(e){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.delete("/cart_item/"+e._id);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.abrupt("return",[]);case 5:case"end":return t.stop()}}),t)}))),P.apply(this,arguments)}function k(){return k=Object(h.a)(f.a.mark((function t(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D("cart");case 2:return t.sent.forEach(function(){var t=Object(h.a)(f.a.mark((function t(e){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return delete e._id,e.createdAt=Date.now(),t.next=4,m.a.post("/sale",e);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=6,D("sales");case 6:return e=t.sent,t.abrupt("return",e);case 8:case"end":return t.stop()}}),t)}))),k.apply(this,arguments)}function M(){return M=Object(h.a)(f.a.mark((function t(){var e,n,r,a,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D("cart");case 2:e=t.sent,n=[],r=function(t){if(n.length){if(n.find((function(n){return n.name===e[t].name})))return"continue";n.push(e[t])}else n.push(e[t])},a=0;case 6:if(!(a<e.length)){t.next=13;break}if("continue"!==r(a)){t.next=10;break}return t.abrupt("continue",10);case 10:a++,t.next=6;break;case 13:return n.forEach(function(){var t=Object(h.a)(f.a.mark((function t(e){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return delete e._id,e.createdAt=Date.now(),t.next=4,m.a.post("/unique_sale",e);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=16,D("unique_sales");case 16:return c=t.sent,t.abrupt("return",c);case 18:case"end":return t.stop()}}),t)}))),M.apply(this,arguments)}function U(){return function(){var t=Object(h.a)(f.a.mark((function t(e){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.emptyCart();case 2:n=t.sent,e({type:"UPDATE_CART",cart:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}var _={updateProduct:function(t){return function(){var e=Object(h.a)(f.a.mark((function e(n){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.updateProduct(t);case 2:r=e.sent,n({type:"UPDATE_PRODUCTS",products:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},I=Object(p.b)((function(t){return Object(u.a)({},t)}),_)((function(t){var e=Object(r.useState)({_id:t.product._id,name:t.product.name,description:t.product.description,price:t.product.price,image:t.product.image}),n=Object(d.a)(e,2),a=n[0],c=n[1];Object(r.useEffect)((function(){return function(){return c({})}}),[]);var s=function(e){e.preventDefault(),a.name&&a.description&&a.image&&a.price&&"number"===typeof a.price?(t.updateProduct(a),t.setShowEditModal(!1)):console.log("SOMETHING WRONG")};return t.showEditModal?Object(l.jsx)("div",{className:"edit-product-modal",onClick:function(e){e.preventDefault(),e.stopPropagation(),t.setShowEditModal(!1)},children:Object(l.jsxs)("div",{className:"edit-product-inner",onClick:function(t){t.preventDefault(),t.stopPropagation()},children:[Object(l.jsx)("h1",{children:"ADD PRODUCT"}),Object(l.jsxs)("form",{onSubmit:s,children:[Object(l.jsx)("input",{className:"edit-modal-input",placeholder:"NAME",type:"text",id:"name",value:a.name,onChange:function(t){t.preventDefault(),c(Object(u.a)(Object(u.a)({},a),{},{name:t.target.value}))}}),Object(l.jsx)("input",{className:"edit-modal-input",placeholder:"PRICE",type:"number",id:"price",value:a.price,onChange:function(t){t.preventDefault(),c(Object(u.a)(Object(u.a)({},a),{},{price:parseInt(t.target.value)}))}}),Object(l.jsx)("input",{className:"edit-modal-input",placeholder:"DESCRIPTION",type:"text",id:"description",value:a.description,onChange:function(t){t.preventDefault(),c(Object(u.a)(Object(u.a)({},a),{},{description:t.target.value}))}}),Object(l.jsx)("input",{className:"edit-modal-input",placeholder:"IMAGE",type:"text",id:"image",value:a.image,onChange:function(t){t.preventDefault(),c(Object(u.a)(Object(u.a)({},a),{},{image:t.target.value}))}}),Object(l.jsx)("button",{type:"submit",className:"button edit-form-submit-button",onClick:s,children:"SAVE PRODUCT"})]})]})}):""}));function R(t){var e=Object(r.useState)(!1),n=Object(d.a)(e,2),a=n[0],c=n[1];return Object(l.jsxs)("div",{className:"edit-button button",children:[Object(l.jsx)(I,{product:t.product,showEditModal:a,setShowEditModal:c}),Object(l.jsx)("button",{onClick:function(t){t.preventDefault(),c(!0)},children:"EDIT"})]})}var q={deleteProduct:function(t){return function(){var e=Object(h.a)(f.a.mark((function e(n){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.deleteProduct(t);case 2:r=e.sent,n({type:"UPDATE_PRODUCTS",products:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},L=Object(p.b)((function(t){return Object(u.a)({},t)}),q)((function(t){return Object(l.jsx)("div",{className:"add-button button",children:Object(l.jsx)("button",{onClick:function(){t.deleteProduct(t.product)},children:"DELETE"})})}));function G(){var t=Object(p.c)((function(t){return t})).products;return t?Object(l.jsx)("div",{className:"admin-items-list",children:Object(l.jsx)("table",{children:Object(l.jsxs)("tbody",{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Title"}),Object(l.jsx)("th",{children:"Price"}),Object(l.jsx)("th",{children:"Description"}),Object(l.jsx)("th",{children:"Image"}),Object(l.jsx)("th",{children:"Option"})]}),t.map((function(t){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:t.name}),Object(l.jsx)("td",{children:"$".concat(t.price)}),Object(l.jsx)("td",{children:"".concat(t.description)}),Object(l.jsx)("td",{className:"image-container",children:Object(l.jsx)("img",{src:t.image})}),Object(l.jsxs)("td",{children:[Object(l.jsx)(L,{product:t}),Object(l.jsx)(R,{product:t})]})]},t._id)}))]})})}):Object(l.jsx)(l.Fragment,{})}var H={addProduct:function(t){return function(){var e=Object(h.a)(f.a.mark((function e(n){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.addProduct(t);case 2:r=e.sent,n({type:"UPDATE_PRODUCTS",products:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},F=Object(p.b)((function(t){return Object(u.a)({},t)}),H)((function(t){var e=Object(r.useState)({name:"",description:"",price:"",image:""}),n=Object(d.a)(e,2),a=n[0],c=n[1],s=function(){var e=Object(h.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!(a.name&&a.description&&a.image&&a.price&&"number"===typeof a.price)){e.next=8;break}return e.next=4,t.addProduct(a);case 4:c({name:"",description:"",price:"",image:""}),t.setShowAddModal(!1),e.next=9;break;case 8:console.log("SOMETHING WRONG");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return t.showAddModal?Object(l.jsx)("div",{className:"add-product-modal",onClick:function(e){e.preventDefault(),e.stopPropagation(),t.setShowAddModal(!1)},children:Object(l.jsxs)("div",{className:"add-product-inner",onClick:function(t){t.preventDefault(),t.stopPropagation()},children:[Object(l.jsx)("h1",{children:"ADD PRODUCT"}),Object(l.jsxs)("form",{onSubmit:s,children:[Object(l.jsx)("input",{className:"add-modal-input",placeholder:"NAME",type:"text",id:"name",value:a.name,onChange:function(t){t.preventDefault(),c(Object(u.a)(Object(u.a)({},a),{},{name:t.target.value}))}}),Object(l.jsx)("input",{className:"add-modal-input",placeholder:"PRICE",type:"number",id:"price",value:a.price,onChange:function(t){t.preventDefault(),c(Object(u.a)(Object(u.a)({},a),{},{price:parseInt(t.target.value)}))}}),Object(l.jsx)("input",{className:"add-modal-input",placeholder:"DESCRIPTION",type:"text",id:"description",value:a.description,onChange:function(t){t.preventDefault(),c(Object(u.a)(Object(u.a)({},a),{},{description:t.target.value}))}}),Object(l.jsx)("input",{className:"add-modal-input",placeholder:"IMAGE",type:"text",id:"image",value:a.image,onChange:function(t){t.preventDefault(),c(Object(u.a)(Object(u.a)({},a),{},{image:t.target.value}))}}),Object(l.jsx)("button",{type:"submit",className:"button add-form-submit-button",onClick:s,children:"ADD NEW PRODUCT"})]})]})}):""}));var Y=Object(p.b)((function(t){return Object(u.a)({},t)}),{})((function(t){var e=Object(r.useState)(!1),n=Object(d.a)(e,2),a=n[0],c=n[1],s=Object(o.f)();return Object(l.jsxs)("div",{className:"admin-page",children:[Object(l.jsx)(F,{showAddModal:a,setShowAddModal:c}),Object(l.jsx)("button",{onClick:function(){return s("/adminpage")},children:"TO ADMIN"}),Object(l.jsx)("button",{onClick:function(){return s("/homepage")},children:"TO HOME"}),Object(l.jsx)("button",{onClick:function(){return s("/statspage")},children:"TO STATS"}),Object(l.jsx)(j,{showAddModal:a,setShowAddModal:c}),Object(l.jsx)(G,{})]})}));var Q={addToCart:function(t){return function(){var e=Object(h.a)(f.a.mark((function e(n){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.addToCart(t);case 2:r=e.sent,n({type:"UPDATE_CART",cart:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},$=Object(p.b)((function(t){return Object(u.a)({},t)}),Q)((function(t){return Object(l.jsx)("div",{className:"add-button button",children:Object(l.jsx)("button",{onClick:function(){t.addToCart(t.product)},children:"ADD TO CART"})})}));function J(){var t=Object(p.c)((function(t){return t})).products;return t?Object(l.jsx)("div",{className:"home-items-list",children:t.map((function(t){return Object(l.jsxs)("div",{className:"home-list-card",children:[Object(l.jsx)("div",{className:"home-list-card-part image-container",children:Object(l.jsx)("img",{src:t.image})}),Object(l.jsx)("div",{className:"home-list-card-part",children:t.name}),Object(l.jsx)("div",{className:"home-list-card-part",children:"".concat(t.description)}),Object(l.jsx)("div",{className:"home-list-card-part",children:"$".concat(t.price)}),Object(l.jsx)("div",{children:Object(l.jsx)($,{product:t})})]},t._id)}))}):Object(l.jsx)(l.Fragment,{})}function W(t){var e=Object(p.c)((function(t){return t.cart})).length;return Object(l.jsx)("div",{className:"open-cart-button button",onClick:function(e){e.preventDefault(),e.stopPropagation(),t.setShowCartModal(!0)},children:Object(l.jsxs)("button",{children:["Cart: ",e]})})}var B={emptyCart:U},V=Object(p.b)((function(t){return Object(u.a)({},t)}),B)((function(t){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("button",{className:"empty-cart-button button",onClick:function(e){e.preventDefault(),t.emptyCart()},children:["EMPTY",Object(l.jsx)("br",{}),"CART"]})})}));var z={buyCartSales:function(){return function(){var t=Object(h.a)(f.a.mark((function t(e){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.buyCartSales();case 2:n=t.sent,e({type:"UPDATE_SALES",sales:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},buyCartUniqueSales:function(){return function(){var t=Object(h.a)(f.a.mark((function t(e){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.buyCartUniqueSales();case 2:n=t.sent,e({type:"UPDATE_UNIQUE_SALES",uniqueSales:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},emptyCart:U},K=Object(p.b)((function(t){return Object(u.a)({},t)}),z)((function(t){var e=Object(r.useState)(0),n=Object(d.a)(e,2),a=n[0],c=n[1],s=Object(p.c)((function(t){return t.cart}));return Object(r.useEffect)((function(){for(var t=0,e=0;e<s.length;e++)t+=s[e].price;c(t)}),[s]),t.showCartModal?Object(l.jsx)("div",{className:"home-cart-modal",onClick:function(e){e.preventDefault(),e.stopPropagation(),t.setShowCartModal(!1)},children:Object(l.jsxs)("div",{className:"home-cart-inner",onClick:function(t){t.preventDefault(),t.stopPropagation()},children:[Object(l.jsx)("h1",{children:"SHOPPING CART"}),s.map((function(t,e){return Object(l.jsxs)("div",{className:"cart-item",children:[Object(l.jsx)("div",{className:"cart-item-part image-container",children:Object(l.jsx)("img",{src:t.image})}),Object(l.jsx)("div",{className:"cart-item-part",children:t.name}),Object(l.jsx)("div",{className:"cart-item-part",children:"$".concat(t.price)})]},e)})),Object(l.jsxs)("h3",{children:["TOTAL: ",a]}),Object(l.jsx)("button",{className:"buy-cart-button button",onClick:function(e){e.preventDefault(),e.stopPropagation(),t.buyCartSales(),t.buyCartUniqueSales(),t.emptyCart(),t.setShowCartModal(!1)},children:"BUY"})]})}):""}));var X=Object(p.b)((function(t){return Object(u.a)({},t)}),{})((function(){var t=Object(r.useState)(!1),e=Object(d.a)(t,2),n=e[0],a=e[1],c=Object(o.f)();return Object(l.jsxs)("div",{className:"home-page",children:[Object(l.jsx)("button",{onClick:function(){return c("/adminpage")},children:"TO ADMIN"}),Object(l.jsx)("button",{onClick:function(){return c("/homepage")},children:"TO HOME"}),Object(l.jsx)("button",{onClick:function(){return c("/statspage")},children:"TO STATS"}),Object(l.jsx)("h1",{children:"HOMEPAGE"}),Object(l.jsxs)("div",{className:"home-cart-buttons",children:[Object(l.jsx)(W,{showCartModal:n,setShowCartModal:a}),Object(l.jsx)(K,{showCartModal:n,setShowCartModal:a}),Object(l.jsx)(V,{})]}),Object(l.jsx)(J,{})]})})),Z=n(19),tt=n.n(Z);var et=Object(p.b)((function(t){return Object(u.a)({},t)}),{})((function(){var t=Object(p.c)((function(t){return t.products})),e=Object(p.c)((function(t){return t.sales})),n=Object(p.c)((function(t){return t.uniqueSales})),a=Object(r.useState)([]),c=Object(d.a)(a,2),s=c[0],u=c[1],i=Object(r.useState)([]),j=Object(d.a)(i,2),b=j[0],f=j[1],h=Object(r.useState)([]),O=Object(d.a)(h,2),m=O[0],x=O[1];Object(r.useEffect)((function(){for(var t=[],n=(new Date,function(n){var r=new Date,a=new Date(r.setDate(r.getDate()-n)),c=e.filter((function(t){return new Date(t.createdAt).getDate()===new Date(r.setDate(r.getDate()-n)).getDate()&&new Date(t.createdAt).getMonth()===new Date(r.setDate(r.getDate()-n)).getMonth()&&new Date(t.createdAt).getFullYear()===new Date(r.setDate(r.getDate()-n)).getFullYear()})),s={date:a.getDate(),month:a.getMonth()+1,year:a.getFullYear(),salesSum:c.reduce((function(t,e){return t+e.price}),0)};console.log(a.getDate()),t.push(s)}),r=0;r<5;r++)n(r);u(t)}),[e]),Object(r.useEffect)((function(){if(e.length<2)f(e);else{for(var n,r=[],a=0;a<t.length;a++){n=0;for(var c=0;c<e.length;c++)t[a].name===e[c].name&&n++;if(n>0){var s=t[a];s.timesSold=n,r.push(s)}}var u=tt()(r);for(u.sort((function(t,e){return t.timesSold>e.timesSold?-1:e.timesSold>t.timesSold?1:0}));u.length>5;)u.pop();f(u)}}),[e]),Object(r.useEffect)((function(){if(n.length<2)x(n);else{for(var e,r=[],a=0;a<t.length;a++){e=0;for(var c=0;c<n.length;c++)t[a].name===n[c].name&&e++;if(e>0){var s=t[a];s.timesSold=e,r.push(s)}}var u=tt()(r);for(u.sort((function(t,e){return t.timesSold>e.timesSold?-1:e.timesSold>t.timesSold?1:0}));u.length>5;)u.pop();x(u)}}),[n]);var v=Object(o.f)();return Object(l.jsxs)("div",{className:"statistics-page",children:[Object(l.jsx)("button",{onClick:function(){return v("/adminpage")},children:"TO ADMIN"}),Object(l.jsx)("button",{onClick:function(){return v("/homepage")},children:"TO HOME"}),Object(l.jsx)("button",{onClick:function(){return v("/statspage")},children:"TO STATS"}),Object(l.jsx)("h1",{children:"STATISTICS PAGE"}),Object(l.jsxs)("div",{className:"statistics-cards-container",children:[Object(l.jsxs)("div",{className:"statistics-card statistics-sales",children:[Object(l.jsx)("h2",{children:"SALES"}),b.map((function(t){return Object(l.jsxs)("div",{children:[t.name,": ",t.timesSold]})}))]}),Object(l.jsxs)("div",{className:"statistics-card statistics-unique-sales",children:[Object(l.jsx)("h2",{children:"UNIQUE SALES"}),m.map((function(t){return Object(l.jsxs)("div",{children:[t.name,": ",t.timesSold]})}))]}),Object(l.jsxs)("div",{className:"statistics-card statistics-sales-5-days",children:[Object(l.jsx)("h2",{className:"statistics-card-item",children:"PAST 5 DAYS"}),s.map((function(t){return Object(l.jsx)("div",{className:"statistics-card-item",children:t.salesSum?"".concat(t.year,"-").concat(t.month,"-").concat(t.date,": $").concat(t.salesSum):"".concat(t.year,"-").concat(t.month,"-").concat(t.date,": $0")})}))]})]})]})}));var nt={createProducts:function(){return function(){var t=Object(h.a)(f.a.mark((function t(e){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.createProducts();case 2:n=t.sent,e({type:"UPDATE_PRODUCTS",products:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},createCart:function(){return function(){var t=Object(h.a)(f.a.mark((function t(e){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.createCart();case 2:n=t.sent,e({type:"UPDATE_CART",cart:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},createSales:function(){return function(){var t=Object(h.a)(f.a.mark((function t(e){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.createSales();case 2:n=t.sent,e({type:"UPDATE_SALES",sales:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},createUniqueSales:function(){return function(){var t=Object(h.a)(f.a.mark((function t(e){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.createUniqueSales();case 2:n=t.sent,e({type:"UPDATE_UNIQUE_SALES",uniqueSales:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},rt=Object(p.b)((function(t){return Object(u.a)({},t)}),nt)((function(t){return Object(r.useEffect)((function(){t.createProducts(),t.createCart(),t.createSales(),t.createUniqueSales()}),[]),Object(l.jsx)(i.a,{children:Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",element:Object(l.jsx)(X,{})}),Object(l.jsx)(o.a,{exact:!0,path:"/homepage",element:Object(l.jsx)(X,{})}),Object(l.jsx)(o.a,{exact:!0,path:"/adminpage",element:Object(l.jsx)(Y,{})}),Object(l.jsx)(o.a,{exact:!0,path:"/statspage",element:Object(l.jsx)(et,{})})]})})})})),at=(n(64),n(20)),ct={products:[],cart:[],sales:[],uniqueSales:[]};var st=n(31),ut=Object(at.b)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(e.type){case"UPDATE_STATE":default:return t;case"UPDATE_PRODUCTS":return Object(u.a)(Object(u.a)({},t),{},{products:e.products});case"UPDATE_CART":return Object(u.a)(Object(u.a)({},t),{},{cart:e.cart});case"UPDATE_SALES":return Object(u.a)(Object(u.a)({},t),{},{sales:e.sales});case"UPDATE_UNIQUE_SALES":return Object(u.a)(Object(u.a)({},t),{},{uniqueSales:e.uniqueSales})}}),Object(at.a)(st.a));s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(p.a,{store:ut,children:Object(l.jsx)(rt,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.67562357.chunk.js.map