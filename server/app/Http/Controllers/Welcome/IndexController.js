/**
 * 欢迎控制器
 *
 * @author : Sunkey
 */

var Controller = require(GLB.CONS.COMPONENT_PATH + '/Controller');

class IndexController extends Controller {
    /**
     * 入口
     * 
     * @return Json
     */
    index() {
        this.response.json({code: 200, msg: 'Welcome Jedijs!'});
    }
}

module.exports = IndexController;
