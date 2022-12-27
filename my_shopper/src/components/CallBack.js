import React, {useCallback,useState,useEffect} from 'react'
const student =[
    { Name:"anita",Subject:"python"},
    { Name:"sunita",Subject:"javascript"},
    { Name:"kavya",Subject:"java"},
    { Name:"monika",Subject:"dot.net"},
    { Name:"sarika",Subject:"React"},
];

export default function  Callback(){
   
    console.log(student)

const [count, setcount] = useState(student)
const [revcount, setRevcount] = useState(100)
console.log(useState)


const getstudent = ()=>{
    return student[count]
    
    console.log(student)
    
}
console.log(student)
//const decrementCounter = useCallback(()=>{
   // setrevcount(count - 1)
//},[count])

//funccount.add(incrementCounter);
//funccount.add(decrementCounter);

//alert(funccount.size)
return(
    <div className='container'>
        
        <button onClick={()=> setcount(count +1)}>Increase counter</button>
        <button onClick={()=> setRevcount(revcount -1)}>decrease counter</button>
      
        
        
        </div>
    
)

 function  Studsection(getstudent){
    const [student, setstudent]=useState([])
console.log(student)
    useEffect(()=>{
        setstudent([...student, getstudent()])
        console.log("getstudent called")
    },[getstudent])
    return(
        <div>
            {student && student.length>0 && student.map(val=>
    
                 <p>{val?.Name}</p> )}
        </div>
         
    )
            }
        }
