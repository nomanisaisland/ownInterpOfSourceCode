<!--
 * @Author: lujiafeng
 * @Date: 2022-07-09 17:45:15
 * @LastEditTime: 2022-09-13 16:20:52
 * @LastEditors: lujiafeng
 * @Description: 
 * @FilePath: \debug-anything\react-test\README.md
 * 可以输入预定的版权声明、个性签名、空行等
-->
<!--
 * @Author: lujiafeng
 * @Date: 2022-07-09 17:45:15
 * @LastEditTime: 2022-09-06 16:04:50
 * @LastEditors: lujiafeng
 * @Description:
 * @FilePath: \debug-anything\README.md
 * 可以输入预定的版权声明、个性签名、空行等
-->
## react架构
+ scheduler  实现时间切片 （调度器）  调度任务的优先级，高优任务优先进入Reconciler
  +  window.requestIdleCallback(callback[, options]) 基于这个方法
+ Lane模型 任务调度优先
+ reconciler(render阶段) (协调器)  创建fiber节点  负责找出变化的组件
+ renderer(commit阶段) 渲染器  不同平台不同实现  负责将变化的组件渲染到页面上
+ concurrent


## 面试准备
### 1. react
#### 1.1 合成事件
为什么有合成事件：react合成事件是根据w3c规范来定义的，fb想要兼容所有浏览器，用原生事件肯定会有兼容问题，所以react搞了一个合成事件来解决这个问题
合成事件原理：把所有的事件都代理到根节点。但是有些事件是没有冒泡的，react对这些事件也有单独的处理





## 面试问题
<!-- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/label#%E5%8F%82%E8%A7%81 -->
```javascript
// 作用： 深层循环的时候需要跳到最外层循环的时候用这个方法跳
test: while(true) {
  while (true) {
    if (true) {
      continue test
    }
  }
}
```



### 数据追踪
isStrictMode（false）
concurrentUpdatesByDefaultOverride（false）
identifierPrefix(" ")
onRecoverableError(defaultOnRecoverableError)
transitionCallbacks(null)


![fiberRoot](./react-test/fiberRoot.png)


> legacy 模式在合成事件中有自动批处理的功能，但仅限于一个浏览器任务。非 React 事件想使用这个功能必须使用 unstable_batchedUpdates。在 blocking 模式和 concurrent 模式下，所有的 setState 在默认情况下都是批处理的。会在开发中发出警告

> 不同模式在react运行时的含义
legacy模式是我们常用的，它构建dom的过程是同步的，所以在render的reconciler中，如果diff的过程特别耗时，那么导致的结果就是js一直阻塞高优先级的任务(例如用户的点击事件)，表现为页面的卡顿，无法响应。

> concurrent Mode是react未来的模式，它用时间片调度实现了异步可中断的任务，根据设备性能的不同，时间片的长度也不一样，在每个时间片中，如果任务到了过期时间，就会主动让出线程给高优先级的任务。这部分将在第15节 scheduler&lane模型 。


> 两种模式的不同点：
createRootImpl中传入的第二个参数不一样 一个是LegacyRoot一个是ConcurrentRoot
requestUpdateLane中获取的lane的优先级不同
在函数scheduleUpdateOnFiber中根据不同优先级进入不同分支，legacy模式进入performSyncWorkOnRoot，concurrent模式会异步调度performConcurrentWorkOnRoot

## 方法讲解
```javascript

shouldYieldToHost() // 判断任务是否可以终止



React.createElement() // 调用的是createElementWithValidation这个方法
// 整理数据最后返回一个虚拟DOM节点
// children 会放到props中，一个是自己本身，多个是数组


ReactDOM.createRoot() //


```


<!-- 我们现在知道了存在current Fiber和workInProgress Fiber两颗Fiber树，Fiber双缓存指的就是，在经过reconcile（diff）形成了新的workInProgress Fiber然后将workInProgress Fiber切换成current Fiber应用到真实dom中，存在双Fiber的好处是在内存中形成视图的描述，在最后应用到dom中，减少了对dom的操作。 -->


react 17版本后提供了全新的jsx转换方式，它会在编译时运行`import {jsx as _jsx} from 'react/jsx-runtime';`，直接自动转换，无需手动引入react将jsx转换为react.createElement

react 面试
1. jsx和Fiber有什么关系

讲这个之前先讲一下两者是什么东西？
jsx是Javascript and XML的缩写，可以通过babel可以转义为虚拟DOM
Fiber是react的一种最小的数据单元结构

jsx通过babel转译为虚拟DOM，





# 可以触发组件更新的方法
+ ReactDOM.render —— HostRoot

+ this.setState —— ClassComponent

+ this.forceUpdate —— ClassComponent

+ useState —— FunctionComponent

+ useReducer —— FunctionComponent

一共三种组件（HostRoot | ClassComponent | FunctionComponent）可以触发更新。


# 疑问？
为什么通过更新状态的hooks更新状态后整个组件都会重新执行一遍



# concurrent模式下
createRoot 主要干了以下事情
1. 创建FiberRoot 和RootFiber实例及为他们创建联系
2. 创建react的合成事件
3. 返回render函数