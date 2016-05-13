webpackJsonp([0,3],[
/* 0 */
/***/ function(module, exports) {

	"use strict";

	$.ajax({
	    // 获取id，challenge，success（是否启用failback）
	    url: "http://localhost:9988/LoginFront/captcha",
	    type: "get",
	    dataType: "json", // 使用json格式
	    success: function success(data) {
	        console.log(data);
	        // 使用initGeetest接口
	        // 参数1：配置参数，与创建Geetest实例时接受的参数一致
	        // 参数2：回调，回调的第一个参数验证码对象，之后可以使用它做appendTo之类的事件
	        // initGeetest({
	        //     gt: data.gt,
	        //     challenge: data.challenge,
	        //     product: "embed", // 产品形式
	        //     offline: !data.success
	        // }, handler);
	    }
	});

/***/ }
]);