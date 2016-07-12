/**
 * 日志控制模块
 * 
 * @author : Sunkey
 */

class Logger {
    static getInstance(driver, config) {
    	const Driver = require('./drivers/' + _.capitalize(driver));
    	return new Driver(config);
    }
}

module.exports = Logger;
