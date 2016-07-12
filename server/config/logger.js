/**
 * Log4js配置文件
 *
 * @author : Sunkey
 */

module.exports = {
    driver: GLB.FUNC.env('LOGGER_DRIVER'),
    connections: {
        file: {
            appenders: [
                {
                    type: 'dateFile',
                    filename: GLB.CONS.ROOT_PATH + '/logs/',
                    absolute: true,
                    pattern: 'yyyy-MM-dd.log',
                    alwaysIncludePattern: true,
                    category: 'log',
                },
            ],
        },
        queue: {

        },
    },
};