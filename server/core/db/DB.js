/**
 * 数据库控制模块
 * 
 * @author : Sunkey
 */

class DB {
    static getInstance(driver, config) {
    	const Driver = require('./drivers/' + _.capitalize(driver));
    	return new Driver(config);
    }
}

module.exports = DB;