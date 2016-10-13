// 通过检测是否具有DOM2级方法，是否是IE浏览器，来判断使用哪个处理程序
/**
 * 跨浏览器的事件处理程序
 *
 * element 要操作的元素
 * type 事件类型
 * handler 事件处理程序函数
 *
 * @type {{addHandler: EventUtil.addHandler, removeHandler: EventUtil.removeHandler}}
 */
var EventUtil = {
    addHandler: function (element, type, handler) {
        //addEventListener() DOM2级方法
        /**
         * addEventListener(type, handler, false)
         * type: 事件类型
         *  handler 事件处理程序函数
         *  false 表示冒泡阶段
         */
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },
    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    }
};