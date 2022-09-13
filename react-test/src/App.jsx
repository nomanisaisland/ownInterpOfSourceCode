/*
 * @Author: lujiafeng
 * @Date: 2022-07-09 17:48:17
 * @LastEditTime: 2022-09-13 10:46:03
 * @LastEditors: lujiafeng
 * @Description: 
 * @FilePath: \debug-anything\react-test\src\App.jsx
 * 可以输入预定的版权声明、个性签名、空行等
 */
/**
 * @Author: lujiafeng
 * @Date: 2022-06-15 19:59:06
 * @LastEditTime: 2022-06-16 23:27:59
 * @LastEditors: lujiafeng
 * @Description: 
 * @FilePath: \debug-anything\react-test\src\App.js
 * @可以输入预定的版权声明、个性签名、空行等
 */
import logo from './logo.svg';
import './App.css';
import { useEffect, useState, Suspense, lazy, useRef, memo, useMemo } from "react"

let index = 0

function Loading () {
  return (
    <div>
      ...
    </div>
  )
}
const LazyComp = lazy(() => import("./LazyComp"))
import { useCallback } from 'react';

function CallBackTestComp ({ callbackTest, count, updateParent }) {
  const [test, setTest] = useState(0)

  return (
    <>
      <p>
        callbacktestdemo
        {count}
        {test}
      </p>
      <button onClick={() => { setTest(test + 1) }}>test</button>
      <button onClick={() => {
        updateParent()
      }}>updateParent</button>
    </>
  )
}

function DiffDemo ({ diffTextNodeDemoVal }) {
  const [count, setCount] = useState(0)
  return (
    <>
      {/* <p>{diffTextNodeDemoVal}</p> */}
      <p key={count} onClick={() => { setCount(count + 1) }}>{count}</p>
      {/* <button onClick={() => { setCount(count + 1) }}>setCount</button> */}
    </>
  )
}
function DiffTextNodeDemo () {
  const [val, setVal] = useState(undefined);
  return (
    <>
      <input type="text" onChange={(e) => { setVal(e.target.value) }} value={val} />
    </>
  )
}
function App () {
  const [count, setCount] = useState(0)
  const [state, setState] = useState([]);
  const ref = useRef();
  state.push(1)
  function changeState () {
    console.log("app2")
    setCount(count + 1)
  }
  useEffect(() => {
  }, [])
  function memoFn (a) {
    return a + 1
  }
  const memoizedValue = useMemo(() => memoFn(count), [count]);


  const MemoButton = memo(CallBackTestComp)

  // 每次更新子组件重新渲染都会导致这个方法被重新执行，所以使用useCallBack优化
  const callbackTest = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("callback")
      }, 1000)
    })
  }

  // 会重新创建这个方法
  // const updateParent = () => {
  //   console.log('handleClick');
  //   setCount(count + 1)
  // }
  const updateParent = useCallback(() => {
    console.log(count)
    setCount(count + 1)
  }, [count])

  const [diffTextNodeDemoVal, setDiffTextNodeDemoVal] = useState(0)
  return (
    <div className="App" ref={ref} onClick={() => { console.log("app") }}>
      <header className="App-header">
        <DiffDemo diffTextNodeDemoVal={diffTextNodeDemoVal} />
        <button onClick={() => { setDiffTextNodeDemoVal(diffTextNodeDemoVal + 1) }}>diffTextNodeDemoVal</button>
        <DiffTextNodeDemo />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {count}- {memoizedValue}
        </a>
        <input type="text" />
        <button onClick={changeState}>start</button>
        <MemoButton callbackTest={callbackTest} count={count} updateParent={updateParent} />
        <Suspense fallback={<Loading />}>
          <LazyComp />
        </Suspense>
        <button onDoubleClick={(event) => { console.log(event.isDefaultPrevented()) }}>onTouchStart</button>
        <input type="onChangeFunc" onChange={(event) => { console.log(event.isDefaultPrevented()) }} />
        <input type="onFocus" onFocus={() => { }} />
      </header>
    </div>
  );
}
export default App;
