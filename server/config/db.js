/**
 * 数据库配置文件
 *
 * @author : Sunkey
 */

module.exports = {
    driver: GLB.FUNC.env('DB_DRIVER'),
    connections: {
        'mongo': {
            host: GLB.FUNC.env('MONGO_HOST'),
            port: GLB.FUNC.env('MONGO_PORT'),
            username: GLB.FUNC.env('MONGO_USERNAME'),
            password: GLB.FUNC.env('MONGO_PASSWORD'),
            database: GLB.FUNC.env('MONGO_DATABASE'),
            server: {
                auto_reconnect: true,
                poolSize: 10,
                keepAlive: 1,
                connectTimeoutMS: 3000,
            },
        },
        'mysql': {
            host: GLB.FUNC.env('MYSQL_HOST'),
            port: GLB.FUNC.env('MYSQL_PORT'),
            username: GLB.FUNC.env('MYSQL_USERNAME'),
            password: GLB.FUNC.env('MYSQL_PASSWORD'),
            database: GLB.FUNC.env('MYSQL_DATABASE'),
        },
    }
}