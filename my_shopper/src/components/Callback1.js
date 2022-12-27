
import React, {useCallback,useState} from 'react'
import axios from 'axios'


export default function  Callback1(){

const [api, setApi] = useState([]);

console.log(api)
 useCallback(()=>{
    axios.get("http://localhost:3005/")
    .then(res=>{
        console.log(res);
        console.log(res.data)
        setApi(res.data);
        console.log()
    });
    },[])


return(
    <div className='container'>
    <h1>call product</h1>
    <div className='row'>
    {
        api && api.length>0 && api.map(val=>

            <div className='col-md-3 text-center'>
            <img src={val.image} className="img-responsive pro-image" />
            <h2>{val.price}</h2>
            <p>{val.title}</p>
            <p>{val.id}</p>
            <p>
            <button className='btn btn-warning'>Add To Cart</button>
            &nbsp;&nbsp;
           
            </p>
            </div>
            )
    }
    </div>
    </div>
  )

        }
