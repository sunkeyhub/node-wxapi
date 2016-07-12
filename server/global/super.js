/**
 * 超级全局变量
 *
 * @author : Sunkey
 */

/**
 * 核心包装函数（处理异步和Promise）
 * @param  Mixed    func    复合类型
 * @param  Object    thisObj this对象
 * @param  Rest params  剩余参数
 * @return Object
 */

// co可全局访问
global.co = require('co');

// lodash 可全局访问 
global._ = require('lodash');

// 对象字段命名小驼峰=>下划线
_.camel2under = function(obj) {
	var underObj = _.isArray(obj) ? [] : {};

	_.forOwn(obj, function(val, key) {
		var newKey = _.kebabCase(key).replace('-', '_');
		var newVal = val;
		if (_.isObject(val)) {
			newVal = _.camel2under(val);
		}
		underObj[newKey] = newVal;
	});

	return underObj;
}

// 对象字段命名下划线=>小驼峰
_.under2camel = function(obj) {
	var camelObj = _.isArray(obj) ? [] : {};

	_.forOwn(obj, function(val, key) {
		var newKey = _.camelCase(key);
		var newVal = val;
		if (_.isObject(val)) {
			newVal = _.under2camel(val);
		}
		camelObj[newKey] = newVal;
	});

	return camelObj;
}

// 是否是生成器判断
_.isGenerator = function(obj) {
	return typeof obj.next === 'function' && typeof obj.throw === 'function';
}

_.isGeneratorFunction = function(obj) {
	var constructor = obj.constructor;
	if (!constructor) {
		return false;
	}

	if ('GeneratorFunction' === constructor.name) {
		return true;
	} else {
		return false;
	}
}

_.isPromise = function(obj) {
	return obj && typeof obj.then === 'function';	
}

// 是否是某构造器的实例
_.isInstance = function(obj, constructor) {
	return obj instanceof constructor ? true : false;
}

// 时间工具函数
global.moment = require('moment');
