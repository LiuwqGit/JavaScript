var a=[];
for (var i = 0 ; i < 10; i++) {
	a[i] = function () {
		console.log(i);
	};
}
a[6]();//10

console.log("var a上， let b下");

let b=[];
for (let j = 0 ; j < 10; j++) {
	b[j] = function () {
		console.log(j);
	};
}
b[6]();//6

function setname0(obj0) {
	obj0.name = 'weiqinl';
}
var person = new Object();
setname0(person);
console.log("personname: " + person.name);// personname: weiqinl

//参数 传递的是值， 局部变量
function setname1(obj1) {
	obj1.name = 'weiqinl';
	obj1 = new Object();
	obj1.name = 'abc';
}
var ad = new Object();
setname1(ad);
console.log("adname: " + ad.name);// adname: weiqinl

//null 编译成object对象。但不是引用类型。
var n = null;
var o = new Object();
console.log(typeof n); //object
console.log(n instanceof Object);//false
console.log(o instanceof Object);//true
console.log(i instanceof Object);//false