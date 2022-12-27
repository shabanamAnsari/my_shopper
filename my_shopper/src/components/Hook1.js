import React,{ useState}from 'react'

export default function Hook1() {
    var[username,setUsername]=useState("akshay");
    var myfunc =()=>{
        console.log('func called')
        console.log(username);
        setUsername('akshay new')
    }
  return (
    <div>Hook1
    <hr/>
    {username}
    <button onClick={myfunc}>change</button>
    </div>
  )
}
