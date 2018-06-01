/**
 * @file 自闭合标签表
 * @author errorrik(errorrik@gmail.com)
 */

var splitStr2Obj = require('../util/split-str-2-obj');

/**
 * 自闭合标签列表
 *
 * @type {Object}
 */
var autoCloseTags = splitStr2Obj('area,base,br,col,embed,hr,img,input,keygen,param,source,track,wbr');

exports = module.exports = autoCloseTags;
