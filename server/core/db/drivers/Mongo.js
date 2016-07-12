/**
 * mongodb 驱动
 *
 * @author : Sunkey
 */

const mongoose = require('mongoose');

class Mongo {
    constructor(mongoConfig) {
        const dsn = 'mongodb://' + mongoConfig.host + ':' + mongoConfig.port + '/' + mongoConfig.db;
        let options = {
            server: mongoConfig.server
        };

        if (mongoConfig.user && mongoConfig.password) {
            options.user = mongoConfig.user;
            options.pass = mongoConfig.password;
        }

        mongoose.connect(dsn, options);

        const client = mongoose.connection;

        client.on('connected', function() {
            GLB.app.logger.info('success connected to ' + dsn);
        });

        client.on('disconnected', function() {
            GLB.app.logger.info('disconnected to ' + dsn);
        });

        client.on('reconnected', function() {
            GLB.app.logger.info('reconnected to ' + dsn);
        });

        client.on('error', function() {
            GLB.app.logger.error('error connected to ' + dsn);
        });

        return client;
    }
}

module.exports = Mongo;