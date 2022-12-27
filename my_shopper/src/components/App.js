import { render } from "react-dom";
import React from 'react';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Cart from './Cart';
import Pagenotfound from './Pagenotfound';
import Login from './Login';
import Showcategory from './Showcategory';
import Productdetail from './Productdetail';
import Addcategory from './Addcategory';
import Main from './Main';
import Parent from "./Parent";
import Hook1 from "./Hook1";
import Hook2 from "./Hook2";
 
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Hook3 from "./Hook3";
import Hook4 from "./Hook4";
import Add from "./Add";
import Show from "./Show";
import DeleteProduct from "./DeleteProduct";
import Callback from "./CallBack";
import Callback1 from "./Callback1";
import Callback3 from "./Callback3";
import Updateproduct from "./Updateproduct";
function App(){
  return(
    <BrowserRouter>
<Header/>
<Routes>
<Route path="/" element={<Home />}/>
<Route path="/Loginpage" element={<Login />}/>
<Route path="/parent-child" element={<Main />}/>
<Route path="/parentCom" element={<Parent />}/>
<Route path="/Hook1" element={<Hook1 />}/>
<Route path="/Hook2" element={<Hook2 />}/>
<Route path="/Hook3" element={<Hook3 />}/>
<Route path="/Hook4" element={<Hook4 />}/>
<Route path="/show-data" element={<Show />}/>
<Route path="/add-data" element={<Add />}/>
<Route path="/callback" element={<Callback />}/>
<Route path="/callback1" element={<Callback1 />}/>
<Route path="/callback3" element={<Callback3 />}/>

<Route path="/delete-data/:productId" element={<DeleteProduct />}/>
<Route path="/update-data/:productId" element={<Updateproduct />}/>

<Route path="/single-product/:productId" element={<Productdetail />}/>
<Route path="*" element={<Pagenotfound />}/>
<Route path="/category/add" element={<Addcategory />}/>
<Route path="/category/show" element={<Showcategory />}/>
<Route path="/cartpage" element={<Cart />}/>

</Routes>
<Footer/>
</BrowserRouter>
)}
export default App;
