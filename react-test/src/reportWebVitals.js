/**
 * @Author: lujiafeng
 * @Date: 2022-06-14 22:50:13
 * @LastEditTime: 2022-06-15 00:19:21
 * @LastEditors: lujiafeng
 * @Description: 
 * @FilePath: \react-test\src\reportWebVitals.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry); 
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
