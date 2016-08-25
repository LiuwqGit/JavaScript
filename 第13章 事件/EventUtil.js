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