// <!DOCTYPE HTML>
// <html>

// <head>
//   <meta charset="utf-8">
//   <style>
//     table {
//        border-collapse: collapse;
//      }
//      th, td {
//        border: 1px solid black;
//        padding: 4px;
//      }
//      th {
//        cursor: pointer;
//      }
//      th:hover {
//        background: yellow;
//      }
//   </style>
// </head>

// <body>

//   <table id="grid">
//     <thead>
//       <tr>
//         <th data-type="number">Возраст</th>
//         <th data-type="string">Имя</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td>5</td>
//         <td>Вася</td>
//       </tr>
//       <tr>
//         <td>2</td>
//         <td>Петя</td>
//       </tr>
//       <tr>
//         <td>12</td>
//         <td>Женя</td>
//       </tr>
//       <tr>
//         <td>9</td>
//         <td>Маша</td>
//       </tr>
//       <tr>
//         <td>1</td>
//         <td>Илья</td>
//       </tr>
//     </tbody>
//   </table>

//   <script>

//     grid.onclick = function(e) {
//       if (e.target.tagName != 'TH') return;

//       let th = e.target;
//       // если ячейка TH, тогда сортировать
//       // cellIndex - это номер ячейки th:
//       //   0 для первого столбца
//       //   1 для второго и т.д.
//       sortGrid(th.cellIndex, th.dataset.type);
//     };

//     function sortGrid(colNum, type) {
//       let tbody = grid.querySelector('tbody');

//       let rowsArray = Array.from(tbody.rows);

//       // compare(a, b) сравнивает две строки, нужен для сортировки
//       let compare;

//       switch (type) {
//         case 'number':
//           compare = function(rowA, rowB) {
//             return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
//           };
//           break;
//         case 'string':
//           compare = function(rowA, rowB) {
//             return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
//           };
//           break;
//       }

//       // сортировка
//       rowsArray.sort(compare);

//       tbody.append(...rowsArray);
//     }
//   </script>

// </body>
// </html>
