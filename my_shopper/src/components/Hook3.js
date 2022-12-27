import React,{useState,useRef} from 'react'

export default function Hook3() {
    var [name, setName]=useState('sami');
    var[Age, setAge]=useState(24);
    var [hobbies, sethobies]=useState(['cricket','dance']);
    var [info,setinfo]=useState({place:"thane", degree:"postgraduate"});
    var x1= useRef();
    var x2= useRef();
    var myfunc = function(){
        setName('samirun ansari') ;
        setAge(23);
        sethobies([...hobbies,'swimming','reading']);
        setinfo({...info, role:x1.current.value})
        console.log(info);
        console.log(x1.current.value);
    }
  return (
    <div>
    <h1>Hook3 Example</h1>
    <p>
    Name: {name}
    </p>
    <p>
    Age: {Age}
    </p>
    <p>
    Hobbies:
    <ul>
    {
        hobbies.length>0 && hobbies.map(val=>
            <li>{val}</li>
        )
        }
     </ul>
    </p>
    <p>
    Place: {info.place}
    </p>
    <p>
    Role: {info.role}
    </p>
    <p>
  <input type="text" ref={x1}/>
  <button onClick={myfunc}>Enter</button>
    </p>
    </div>
  )
}
