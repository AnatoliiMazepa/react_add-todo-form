(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(9),s=a(4),l=a(5),c=a(1),o=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),d=a(8),u=a.n(d),m=a(0),j=function(e){var t=e.user;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(null===t||void 0===t?void 0:t.email),children:null===t||void 0===t?void 0:t.name})},h=function(e){var t=e.todo;return Object(m.jsxs)("article",{"data-id":t.id,className:u()("TodoInfo",{"TodoInfo--completed":t.completed}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:t.title}),Object(m.jsx)(j,{user:t.user})]})},b=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(h,{todo:e},e.id)}))})};var p=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(l.a)(Object(l.a)({},e),{},{user:(t=e.userId,o.find((function(e){return e.id===t}))||null)});var t})),f=o.map((function(e){return Object(l.a)({},e)})),O=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)(""),l=Object(s.a)(i,2),o=l[0],d=l[1],u=Object(c.useState)(!1),j=Object(s.a)(u,2),h=j[0],O=j[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){if(e.preventDefault(),O(!0),a&&o){var t=f.find((function(e){return e.name===a})),i=Math.max.apply(Math,Object(r.a)(p.map((function(e){return e.id})))),s={id:i+1,title:o,userId:(null===t||void 0===t?void 0:t.id)||null,user:t||null,completed:!1};p.push(s),n(""),d(""),O(!1)}},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{htmlFor:"titleInput",children:"Title: "}),Object(m.jsx)("input",{type:"text",id:"titleInput","data-cy":"titleInput",placeholder:"Enter a title",value:o,onChange:function(e){return d(e.target.value)}}),!o&&h&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{htmlFor:"userSelect",children:"User: "}),Object(m.jsxs)("select",{name:"userSelect",id:"userSelect","data-cy":"userSelect",value:a,onChange:function(e){return n(e.target.value)},children:[Object(m.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Choose a user"}),f.map((function(e){return Object(m.jsx)("option",{value:e.name,children:e.name},e.id)}))]}),!a&&h&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(m.jsx)(b,{todos:p})]})};i.a.render(Object(m.jsx)(O,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b5339e3a.chunk.js.map