/**
 * 欢迎任务
 *
 * @author : Sunkey
 */

function Welcome() {
    var pub = this;
    var pri = {};

    /**
     * 接口函数
     * @param  string start 开始日期字符串
     * @param  string end   结束日期字符串
     * @return undefined
     */
    pub.run = function run(params) {
        console.log('Welcome Jedijs !');
    }
}

module.exports = new Welcome();
