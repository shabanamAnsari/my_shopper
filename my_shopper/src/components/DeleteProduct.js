import React,{useEffect} from "react";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";
export default function DeleteProduct() {

let params = useParams();
console.log(params)
let navigate = useNavigate();
useEffect(()=>{
    console.log("Do delete", params.productId);
    axios.delete("http://localhost:3005/product/"+params.productId)
    .then((res)=>{
        console.log("product delete");
        console.log(res);
     navigate("/show-data");
    })
},[]);
    return(
        <div>DELETE PRODUCT</div>
    )
}