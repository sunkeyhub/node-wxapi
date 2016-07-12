/**
 * 微信签名控制器
 *
 * @author : Sunkey
 */

const crypto = require('crypto');
const BaseController = require(GLB.CONS.CONTROLLER_PATH + '/Wx/BaseController');
const WxHelper = require(GLB.CONS.HELPER_PATH + '/WxHelper');
const wxConfig = require(GLB.CONS.CONFIG_PATH + '/wx');
const wxSecret = wxConfig.secret;

class TokenController extends BaseController {
    before() {
        try {
            if (!this.checkSign()) {
                return this.response.json({code: 400, msg: 'incorrect sign!'});
            }

            if (!this.checkExpire()) {
                return this.response.json({code: 400, msg: 'sign expired!'});
            }

            if (!this.checkWxNum()) {
                return this.response.json({code: 400, msg: 'wx_num not exists!'});
            }
        } catch (err) {
            GLB.app.logger.error(err);
            return this.response.json({code: 500, msg: 'check error !'});
        }
    }

    /**
     * 获取全局 access_token 接口
     */
    *accessToken() {
        let accessToken = '';
        const wxHelper = new WxHelper(wxSecret[this.wxNum].APP_ID, wxSecret[this.wxNum].APP_SECRET); 

        try {
            accessToken = yield co(wxHelper.getGlobalAccessToken.bind(wxHelper));
        } catch (err) {
            GLB.app.logger.error(err);
            return this.response.json({code: 500, msg: 'app_id or app_secret invalid！'});
        }

        if (!accessToken) {
            return this.response.json({code: 500, msg: 'app_id or app_secret invalid！'});
        }

        return this.response.json({code: 200, data: {access_token: accessToken}});
    }

    /**
     * 清除token缓存接口
     */
    *clearCache() {
        const wxHelper = new WxHelper(wxSecret[this.wxNum].APP_ID, wxSecret[this.wxNum].APP_SECRET);
        const result = yield co(wxHelper.clearCache.bind(wxHelper));

        return this.response.json({code: 200, data: result, msg: '缓存清除成功'});
    }
}

module.exports = TokenController;
