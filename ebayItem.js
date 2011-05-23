var item = document.getElementsByClassName('vi-xs');
var regex = /([0-9]{12})/
console.log(item[0].innerHTML);
var match = regex.exec(item[0].innerHTML);
console.log(match[0]);
