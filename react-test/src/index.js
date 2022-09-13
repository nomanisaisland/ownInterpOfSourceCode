/**
 * @Author: lujiafeng
 * @Date: 2022-06-14 22:50:13
 * @LastEditTime: 2022-08-31 15:18:18
 * @LastEditors: lujiafeng
 * @Description:
 * @FilePath: \debug-anything\react-test\src\index.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// const element = (
//   <div className='title' style={{ color: "red" }}>
//     我很帅
//   </div>
// )
// function element () {
//   const [num, setNum] = useState(null)
//   return (
//     <>
//       {num}
//       {React.createElement("div", {
//         style: {
//           color: "red"
//         },
//         className: "test"
//       }, "i am cool")}
//     </>
//   )
// }
// console.log(element, "准备接入render函数开始渲染65");
// console.log({
//   tips: "createElement的作用就是将react组件转换为对应的虚拟dom节点"
// })
// const ele = element()
// console.log(ele, "eleeleeleele")
// console.log("开始进入createRoot节点")
// import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
// const root2 = ReactDOM.createRoot(document.getElementById('root2'));

root.render(
  <App id={12323}></App>
);
// root2.render(
//   <App id={12323}></App>
// );
// const hydrateRoot = ReactDOM.hydrateRoot(document.getElementById('root'),<App></App>)


// root.unmount();

// ReactDOM.render(<App/>,document.getElementById('root'))
// 后面的可以替换掉前面的
// root.render(<div>21321</div>)
// console.log(root)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

