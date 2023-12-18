(this["webpackJsonpblog-app-in-react-with-bootstrap-and-fontawesome-crud"]=this["webpackJsonpblog-app-in-react-with-bootstrap-and-fontawesome-crud"]||[]).push([[0],{13:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(6),r=a.n(o),c=(a(13),a(4)),s=a(7),i=a(1),u=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{onSubmit:e.savePost},l.a.createElement("h2",null,"Create New Post"),l.a.createElement("label",{className:"col-sm-12 col-form-label"},l.a.createElement("b",null,"Title"),l.a.createElement("input",{className:"form-control form-control-sm",autoFocus:!0,type:"text",placeholder:"post title",onChange:e.savePostTitleToState,required:!0,ref:e.getTitle})),l.a.createElement("br",null),l.a.createElement("label",{className:"col-sm-12 col-form-label"},l.a.createElement("b",null,"Content"),l.a.createElement("textarea",{className:"form-control form-control-sm",placeholder:"description",onChange:e.savePostContentToState,rows:"18",cols:"41",required:!0,ref:e.getContent})),l.a.createElement("br",null),l.a.createElement("button",{title:"save post",className:"btn btn-success ml-3"},"save")))},m=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",null,l.a.createElement("h2",null,"Modify Post"),l.a.createElement("label",{className:"col-sm-12 col-form-label"},l.a.createElement("b",null,"Title"),l.a.createElement("input",{className:"form-control form-control-sm",defaultValue:e.title,autoFocus:!0,onChange:e.savePostTitleToState,placeholder:"title",size:"39"})),l.a.createElement("br",null),l.a.createElement("label",{className:"col-sm-12 col-form-label"},l.a.createElement("b",null,"Content"),l.a.createElement("textarea",{className:"form-control form-control-sm",defaultValue:e.content,onChange:e.savePostContentToState,placeholder:"contents",rows:"18",cols:"41"})),l.a.createElement("button",{title:"update changes",className:"btn btn-success ml-3",onClick:e.updatePost},"Update Post")))},b=function(e){var t=e.id,a=e.title,n=e.content,o=e.editPost,r=e.deletePost;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"card card-width bg-dark"},l.a.createElement("section",{key:t},l.a.createElement("h3",null,a),l.a.createElement("hr",{className:"new1"}),l.a.createElement("p",null,n),l.a.createElement("span",{title:"edit post",onClick:function(){return o(t)}},l.a.createElement("i",{className:"edit-button far fa-edit fa-2x button-css"})),l.a.createElement("span",{title:"delete post",onClick:function(){return r(t)}},l.a.createElement("i",{className:"delete-button fas fa-trash fa-2x ml-2 button-css"})))))},f=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(""),f=Object(i.a)(r,2),d=f[0],p=f[1],E=Object(n.useState)([{id:1,title:"React",content:"React is a JavaScript library created for building fast and interactive user interfaces for web and mobile applications. It is an open-source, component-based, front-end library responsible only for the application\u2019s view layer. In Model View Controller (MVC) architecture, the view layer is responsible for how the app looks and feels. React was created by Jordan Walke, a software engineer at Facebook. "},{id:2,title:"Angular",content:"Angular is a development platform, built on TypeScript. As a platform, Angular includes: A component-based framework for building scalable web applications"}]),g=Object(i.a)(E,2),v=g[0],h=g[1],C=Object(n.useState)(!1),w=Object(i.a)(C,2),P=w[0],N=w[1],T=Object(n.useState)(!1),j=Object(i.a)(T,2),O=j[0],S=j[1],k=Object(n.useState)(""),y=Object(i.a)(k,2),F=y[0],x=y[1],A=Object(n.useRef)(),R=Object(n.useRef)(),J=function(e){o(e.target.value)},V=function(e){p(e.target.value)},D=function(){N(!P)},I=function(){S(!O)},M=function(e){x(e),I()},q=function(e){var t=v.filter((function(t){return t.id!==e}));h(t)};if(P)return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,{savePostTitleToState:J,savePostContentToState:V,getTitle:A,getContent:R,savePost:function(e){e.preventDefault();var t=Date.now();h([].concat(Object(s.a)(v),[{title:a,content:d,id:t}])),A.current.value="",R.current.value="",D()}}),l.a.createElement("button",{className:"btn btn-danger cancel-button",onClick:D},"Cancel"));if(O){var z=v.find((function(e){return e.id===F}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,{title:z.title,content:z.content,updatePost:function(e){e.preventDefault();var t=v.map((function(e){return e.id===F?Object(c.a)(Object(c.a)({},e),{},{title:a||e.title,content:d||e.content}):e}));h(t),I()},savePostTitleToState:J,savePostContentToState:V,toggleCreateNewPost:D}),l.a.createElement("button",{className:"btn btn-danger cancel-update-button",onClick:I},"Cancel"))}return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"All Posts"),v.length?v.map((function(e){return l.a.createElement(b,{id:e.id,key:e.id,title:e.title,content:e.content,editPost:M,deletePost:q})})):l.a.createElement("div",null,l.a.createElement("li",null,"There are no posts yet.")),l.a.createElement("button",{className:"btn btn-outline-info button-edits create-post",onClick:D},"Create New"))},d=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,null))};a(14),a(15);r.a.render(l.a.createElement(d,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.478e953e.chunk.js.map