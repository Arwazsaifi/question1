const md5=require('md5');
var password='arwaz123';
console.log("Normal password:  ",password);
console.log('password with md5:  ',md5(password));