import React, {useCallback,useState} from 'react'


export default function  Callback(){
const students =[
    { Name:"anita",Subject:"python"},
    { Name:"sunita",Subject:"javascript"},
    { Name:"kavya",Subject:"java"},
    { Name:"monika",Subject:"dot.net"},
    { Name:"sarika",Subject:"React"},
];
const [student, setstudent] = useState(students);
const List =({student}) =>{
    
    console.log("rendering");
    return(
        <div>
            <div className='container'>
            {student.map(stud=>(
              
                <ul>
                <li><a>{stud.Name}</a>:{stud.Subject}</li>
                </ul>
            ))}
             <div>
            
    
            <List student={student}/> 
           
   </div>
        </div>
        </div>
    )
}
        }
