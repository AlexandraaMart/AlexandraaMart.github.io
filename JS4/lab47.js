'use strict'
function formatDate(date) {

    let d = date.getDate();
    if (d < 10) d = '0' + d;
  
    let m = date.getMonth() + 1;
    if (m < 10) m = '0' + m;
  
    let y = date.getFullYear() % 100;
    if (y < 10) y = '0' + y;
  
    return d + '.' + m + '.' + y;
  }
  
  let d = new Date(2014, 0, 30); // 30 Янв 2014
  let k = new Date(2007, 11, 5); // 05 Дек 2007
  console.log( formatDate(d) ); // '30.01.14'
  console.log( formatDate(k) ); 