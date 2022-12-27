import React,{useEffect,useState} from "react";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";
export default function Updateproduct() {
const [rec, setrec]=useState({});
let {productId} = useParams();
let navigate = useNavigate();
useEffect(()=>{
    console.log("Do update", productId);
    axios.get("http://localhost:3005/product/"+productId)
    .then((res)=>{
       setrec(res.data)
     
    })
},[]);
var update1=(ev)=>{
    console.log(ev.target.value);
    setrec({...rec,title:ev.target.value})
}
var update2=(ev)=>{
    console.log(ev.target.value);
    setrec({...rec,price:ev.target.value})
}
var update3=(ev)=>{
    console.log(ev.target.value);
    setrec({...rec,category:ev.target.value})
}
var update4=(ev)=>{
    console.log(ev.target.value);
    setrec({...rec,image:ev.target.value})
}
var update5=(ev)=>{
    console.log(ev.target.value);
    setrec({...rec,description:ev.target.value})
}
var onsubmitproduct=(ev)=>{
    ev.preventDefault();
    console.log(rec);
    axios.put("http://localhost:3005/product/"+productId,rec)
    .then((res)=>{
        navigate("/show-data")
    })
}
    return(
        <div className="conatainer">
            <h1 className="text-center">DELETE PRODUCT</h1>
            <form onSubmit={onsubmitproduct}>
                <input type="text" name="title" onChange={update1} value={rec.title} className="form-control" /><br/>
                <input type="text" name="price" onChange={update2} value={rec.price} className="form-control" /><br/>
                <input type="text" name="category" onChange={update3} value={rec.category} className="form-control" /><br/>
                <input type="text" name="image" onChange={update4} value={rec.image} className="form-control" /><br/>
                <textarea type="text" name="description" onChange={update5} value={rec.description} className="form-control"></textarea><br/>
                <button className="btn btn-primary">Update</button>
            </form>
            </div>
    )
}