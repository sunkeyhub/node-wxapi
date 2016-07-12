/**
 * 微信基础控制器
 *
 * @author : Sunkey
 */

const crypto = require('crypto');
const Controller = require(GLB.CONS.COMPONENT_PATH + '/Controller');
const apiConfig = require(GLB.CONS.CONFIG_PATH + '/api');
const wxConfig = require(GLB.CONS.CONFIG_PATH + '/wx');
const wxSecret = wxConfig.secret;

// 签名最大有效期
const MAX_DELAY = 300;

class BaseController extends Controller {
	constructor() {
		super();

		this.wxNum = '';	
	}		

    checkSign() {
        const query = this.request.query;
        if (!query.sign) {
            return false;
        }

        const signObj = _.cloneDeep(query);

        _.unset(signObj, 'sign');

        const signArr = [];

        _.forEach(_.sortBy(_.keys(signObj)), (val) => {
            signArr.push(val + '=' + signObj[val]);
        });
        signArr.push('sign_key=' + apiConfig.sign_key);

        const signStr = signArr.join('&');

        const sha1 = crypto.createHash('sha1');

        sha1.update(signStr);

        const sign = sha1.digest('hex');

        if (sign !== query.sign) {
            return false;
        }

        return true;
    }

    checkExpire() {
        if (!this.request.query.timestamp
        || Math.abs(this.request.query.timestamp - _.floor(_.now()/1000)) > MAX_DELAY) { // 接口调用延时最大300秒
            return false
        }

        return true;
    }

    checkWxNum() {
        this.wxNum = this.request.query.wx_num;
        if (!this.wxNum) {
            this.wxNum = wxConfig.defaultNum;
        } else if (!wxSecret[this.wxNum]) {
            return false;
        }        

        return true;
    }
}

module.exports = BaseController;
