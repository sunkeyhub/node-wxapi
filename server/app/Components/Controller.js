/**
 * 基础控制器组件
 *
 * @author : Sunkey
 */

const corsConfig = require(GLB.CONS.CONFIG_PATH + '/cors');

class Controller {
    constructor() {
        this.request = null;
        this.response = null;
        this.next = null;
    }

    init(req, res, next) {
        this.request = req;
        this.response = res;
        this.next = next;

        this.response.set('Content-Type', 'application/json;charset=utf8');

        if (corsConfig.allowOrigin.indexOf('*') > -1
        || corsConfig.allowOrigin.indexOf(this.request.headers.origin) > -1) {
            this.response.set('Access-Control-Allow-Origin', '*');
        }
    }
}

module.exports = Controller;
