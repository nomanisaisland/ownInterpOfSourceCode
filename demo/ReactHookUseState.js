/**
 * @Author: lujiafeng
 * @Date: 2022-06-16 13:30:35
 * @LastEditTime: 2022-08-22 11:08:51
 * @LastEditors: lujiafeng
 * @Description: 
 * @FilePath: \debug-anything\demo\ReactHookUseState.js
 * @可以输入预定的版权声明、个性签名、空行等
 */

let isMount = true;
let workInProgressHook = null;
const fiber = {
  stateNode: App,
  memoizedState: null
}

function useState (initialState) {
  let hook;
  if (isMount) {
    hook = {
      memoizedState: initialState,
      next: null,
      queue: {
        pending: null
      }
    }
    if (!fiber.memoizedState) {
      fiber.memoizedState = hook;
    } else {
      workInProgressHook.next = hook;
    }
    workInProgressHook = hook;
  } else {
    hook = workInProgressHook;
    workInProgressHook = workInProgressHook.next;
  }


  let baseState = hook.memoizedState;
  if(hook.queue.pending) {
    // 从最后一个pending中拿到第一个pending
    let firstUpdate = hook.queue.pending.next;

    do {
      const action = firstUpdate.action;
      baseState = action(baseState);
      firstUpdate = firstUpdate.next;
    } while (firstUpdate !== hook.queue.pending.next);
    hook.queue.pending = null;
  }
  hook.memoizedState = baseState;
  return [baseState, dispatchAction.bind(null, hook.queue)];
}

function dispatchAction (queue, action) {
  const update = {
    action,
    next: null
  }

  if(queue.pending === null) {
    update.next = update;
  } else {
    update.next = queue.pending.next;
    queue.pending.next = update;
  }
  queue.pending = update;
  schedule()
}

function schedule () {
  workInProgressHook = fiber.memoizedState;
  const app = fiber.stateNode();
  isMount = false;
  return app;
}

function App () {
  const [num, updateNum] = useState(0);
  const [num1, updateNum1] = useState(10);
  // console.log("num:",num)
  // console.log("num1:",num1)
  // console.log("isMount",isMount)
  return ({
    onClick () {
      updateNum(num => num + 1);
    },
    onFocus () {
      updateNum1(num1 => num1 + 10);
      updateNum1(num1 => num1 + 50);
    }
  })
}
window.app = schedule();

const clickBtn = document.getElementById("click");
const focusBtn = document.getElementById("focus");
clickBtn.addEventListener('click', ()=> {
  app.onClick()
})
focusBtn.addEventListener('click', ()=> {
  app.onFocus()
})