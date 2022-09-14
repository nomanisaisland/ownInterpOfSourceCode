/**
 * @Author: lujiafeng
 * @Date: 2022-08-09 15:07:26
 * @LastEditTime: 2022-08-09 17:15:19
 * @LastEditors: lujiafeng
 * @Description: 
 * @FilePath: \debug-anything\react-test\src\my-react\react.js
 * @可以输入预定的版权声明、个性签名、空行等
 */


function createElement (type, config, children) {
  // 定义key和ref
  let key = null, ref = null;
  if (config) {
    ref = config?.ref;
    key = config?.key;
    delete config.key;
    delete config.ref;
    delete config._source;
    delete config._self;
  }
  const props = {

  }
}

const React = {
  createElement,
}


default default React;