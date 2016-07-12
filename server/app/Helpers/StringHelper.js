/**
 * 字符串助手
 *
 * @author : Sunkey
 */

class StringHelper {
    static random(length=16) {
        return _.map(_.range(0, length), () => {
                    return String.fromCharCode('a'.charCodeAt() + _.random(0, 25));
               }).join('');
    }
}

module.exports = StringHelper;