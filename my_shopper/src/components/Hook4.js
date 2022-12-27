import React,{useState,useEffect} from 'react'

export default function Hook4() {
    var [count,setcount]=useState(0);
    var [number, setnumber]=useState(100);
    // this is working as a componentDidupdate
    // useEffect(()=>{
    //     console.log('use effect called',count);
    // })
    // this is working as a componentDidupdate
    // useEffect(()=>{
    //         console.log('use effect called',count);
    //     },[])
        // if there is a change in state variable number
        // useEffect(()=>{
        //     console.log('use effect called',count);
        //  },[number])
        useEffect(()=>{
            console.log('use effect called',count);

            return()=>{
                console.log('will unmount cycle');
            }
         },[])
         var myfunc=()=>{
             setcount(count+1)
         }
         var myfunc1=()=>{
            setnumber( 200 )
        }


  return (
    <div className='container'>
    <h1>Hook4</h1>
    <p>Count:{count}</p>
    <p>Number:{number}</p>
    <button onClick={myfunc}>change</button>
    <button onClick={myfunc1}>Number change</button>
    </div>
  )
}
