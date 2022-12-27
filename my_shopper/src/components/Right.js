import React, { Component } from 'react'
import axios from 'axios'
export default class Right extends Component {
    constructor(){
        super();
        this.state ={
            proname:[]
        }
    }
    componentDidMount(){
        axios.get('https://fakestoreapi.com/products/')
        .then(res=>{
            console.log(res.data);
            this.setState({
                proname:res.data
            });
        })
    }
    componentDidUpdate(prevprops){
      console.log('DID UPDATE',this.props.abc);
      console.log(this.props.abc, prevprops);
      if(this.props.abc!="" && (this.props.abc!=prevprops.abc)){
        axios.get(`https://fakestoreapi.com/products/category/${this.props.abc}`)
        .then(res=>{
          console.log(res.data);
          this.setState({
            proname:res.data
          })
        })
      }
    }
  render() {
      const API=this.state.proname;
    return (
      <div>
      <h1>All products</h1>
      <div className='row'>
     {
          API && API.length>0 && API.map(val=>
            <div className='col-md-3 text-center'>
            <img src={val.image}
            className="img-responsive" />
            <h2>{val.price}</h2>
            <p>{val.title}</p>
            <p>{val.category}</p>
            </div>
           
            )
      }
     
      </div>
      </div>
    )
  }
}
