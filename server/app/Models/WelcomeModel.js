/**
 * 欢迎模型
 *
 * @author : Sunkey
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WelcomeSchema = new Schema({
    created_time: {
        type: Date, 
        default: Date.now,
    }
});

// 设置集合名称
WelcomeSchema.set('collection', 'welcome');

var model = mongoose.model('Welcome', WelcomeSchema);

module.exports = model;
