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

    //返回对event对象的引用
    getEvent: function (event) {
        return event ? event : window.event;
    },

    //返回事件的目标
    getTarget: function (event) {
        return event.target || event.srcElement;
    },

    //取消事件的默认行为
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
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
    },

    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },

    //鼠标事件 mouseover和mouseout
    getRelatedTarget: function (event) {
        if (event.relatedTarget) {
            return event.relatedTarget;
        } else if (event.toElement) {
            return event.toElement;
        } else if (event.fromElement) {
            return event.fromElement;
        } else {
            return null;
        }
    }
};