import React, {useEffect,useState} from 'react'
import axios from 'axios'
import'../css/style1.css';
import {Link } from 'react-router-dom';

export default function Show() {
    const [api, setApi]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3005/product")
        .then(res=>{
            console.log(res);
            console.log(res.data)
            setApi(res.data);
        });
    },[])
  return (
    <div className='container'>
    <h1>Show product</h1>
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
            <Link to={"/single-product/"+val.id} className='btn btn-success'>Details</Link>
            </p>
            </div>
            )
    }
    </div>
    </div>
  )
}
