import React, { Component } from 'react'
import axios from 'axios'
export default class Left extends Component {
    constructor(){
        super();
        this.state ={
            catname:[]
        }
    }
    componentDidMount(){
        axios.get('https://fakestoreapi.com/products/categories')
        .then(res=>{
            console.log(res.data);
            this.setState({
                catname:res.data
            });
        })
    }
    myfunc(value){
      console.log(value, 'LEFT')
      console.log(this.props);
      this.this.props.xyz(value)
    }
  render() {
      const API=this.state.catname;
    return (
      <div>
      <h1>Categories</h1>
      <ul>
     {
          API && API.length>0 && API.map(val=>
            <li onClick={(ev)=>{this.myfunc(ev.target.innerText)}}>{val} </li>
            )
      }
     
      </ul>
      </div>
    )
  }
}
