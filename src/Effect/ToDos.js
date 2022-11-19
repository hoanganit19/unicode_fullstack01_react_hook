import React, { useState, useEffect } from "react";

export default function ToDos() {
  const [msg, setMsg] = useState("");
  const [msg2, setMsg2] = useState("");

  useEffect(() => {
    console.log('componentDidMount')

    return () => {
        console.log('componentWillUnMount')
    }
  }, [])

//   useEffect(() => {
//     console.log('componentDidUpdate')
//   })

  useEffect(() => {
    console.log('componentDidUpdate')
    
  }, [msg, msg2])

//   useEffect(() => {
//     return () => {
//         console.log('componentWillUnMount')
//     }
//   }, [])

  const handleClickBtn = () => {
    setMsg2(Math.random())
  }

  return (
    <div>
      <h1>ToDos</h1>
      <button type="button" onClick={handleClickBtn}>Click</button>
    </div>
  );
}

/*
useEffect() => Mô phỏng vòng đời Components
- componentDidMount()
- componentDidUpdate()
- componentWillUnMount()

*/
