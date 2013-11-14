/**
 * @fileoverview: seajs-api-stub
 * @author: tedzhou
 * @date: 13-11-14 下午1:11
 */
var seajs = {
	/**
	 * seajs.use
	 * @param ids
	 * @param [callback]
	 * @returns {{}}
	 */
	use: function (ids, callback) {
		var mod = {};
		return mod;
	},
	/**
	 * seajs.async
	 * @param module
	 * @param callback
	 * @returns {{}}
	 */
	async: seajs.use,
	/**
	 * seajs.config
	 * @param options
	 */
	config: function (options) {

	}
};

/**
 * seajs.是一个全局函数，用来定义模块。
 * @param [id]
 * @param [deps]
 * @param factory
 */
var define = function (id, deps, factory) {

	/**
	 * 是一个方法，接受 模块标识 作为唯一参数，用来获取其他模块提供的接口。
	 * @param id
	 */
	var require = function (id) {

	};

	/**
	 * 方法用来在模块内部异步加载模块，并在加载完成后执行指定回调。callback 参数可选。
	 * @param ids
	 * @param [callback]
	 */
	require.async = function (ids, callback) {

	};
	/**
	 * 使用模块系统内部的路径解析机制来解析并返回模块路径。该函数不会加载模块，只返回解析后的绝对路径。
	 * @param id
	 */
	require.resolve = function (id) {

	};

	/**
	 * module 是一个对象，上面存储了与当前模块相关联的一些属性和方法。
	 * @type {{}}
	 */
	var module = {
		id: '',
		uri: '',
		dependencies: [],
		exports: {}
	};

	/**
	 * exports 是一个对象，用来向外提供模块接口。
	 * @type {{}}
	 */
	var exports = module['exports'];

	factory && factory(require, exports, module);

};
