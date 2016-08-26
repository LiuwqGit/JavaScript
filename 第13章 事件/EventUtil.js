// 通过检测是否具有DOM2级方法，是否是IE浏览器，来判断使用哪个处理程序
var EventUtil = {
	addHandler: function (element, type, handler) {
		if (element.attachEvent) {
			element.attachEvent("on" + type, handler);
		} else if (element.addEventListener) {
			element.addEventListener(type, handler, false);
		} else {
			element["on" + type] = handler;
		}
	},
	removeHandler: function (element, type, handler) {
		if (element.attachEvent) {
			element.attachEvent("on" + type, handler);
		} else if (element.addEventListener) {
			element.addEventListener(type, handler, false);
		} else {
			element["on" + type] = null;
		}
	}
};