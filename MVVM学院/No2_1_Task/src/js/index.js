// 为兼容 ES5 浏览器环境（主要是 IE8 ~ IE11）而引入的 polyfill，对兼容性没有要求的项目可以不写此行
import 'babel-polyfill'

import san from '../../../node_modules/san'
import {router} from 'san-router'

// style
require('../index.css')

// route
import form from '../form.san'


router.add({rule: '/', Component:form, target: '#app'});

// start
router.start();

