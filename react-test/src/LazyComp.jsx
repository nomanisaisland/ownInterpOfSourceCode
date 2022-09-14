/*
import { useState } from 'react';
 * @Author: lujiafeng
 * @Date: 2022-08-17 17:34:28
 * @LastEditTime: 2022-08-18 16:43:08
 * @LastEditors: lujiafeng
 * @Description: 
 * @FilePath: \debug-anything\react-test\src\LazyComp.jsx
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { useState, useEffect } from "react"
export default function LazyCompDemo () {
  const [num, setNum] = useState(100)


  return (
    <>
      <p>
        {num}
      </p>
    </>
  )
}