// <!DOCTYPE HTML>
// <html>

// <head>
//   <meta charset="utf-8">
//   <style>
//     .menu ul {
//       margin: 0;
//       list-style: none;
//       padding-left: 20px;
//       display: none;
//     }

//     .menu .title {
//       font-size: 18px;
//       cursor: pointer;
//     }

//     .menu .title::before {
//       content: '▶ ';
//       font-size: 80%;
//       color: green;
//     }

//     .menu.open .title::before {
//       content: '▼ ';
//     }

//     .menu.open ul {
//       display: block;
//     }
//   </style>
// </head>

// <body>

//   <div id="sweeties" class="menu">
//     <span class="title">Сладости (нажми меня)!</span>
//     <ul>
//       <li>Пирожное</li>
//       <li>Пончик</li>
//       <li>Мёд</li>
//     </ul>

//   </div>

//   <script>
//     let menuElem = document.getElementById('sweeties');
//     let titleElem = menuElem.querySelector('.title');

//     titleElem.onclick = function() {
//       menuElem.classList.toggle('open');
//     };
//   </script>

// </body>
// </html>
