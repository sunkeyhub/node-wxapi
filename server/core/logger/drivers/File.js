/**
 * 文件队列驱动
 *
 * @author : Sunkey
 */

const fs = require('fs');
const log4js = require('log4js');

class File {
	constructor(config) {
        const logDir = config.appenders[0].filename;
        if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir);
        }
        
        log4js.configure(config);
        this.logger = log4js.getLogger(config.appenders[0].category);
	}

	info(msg) {
		this.logger.info(msg);
	}

	error(msg) {
		this.logger.error(msg);
	}	
}

module.exports = File;
