import React, { Component } from 'react'
import Left from './Left'
import Right from './Right'
export default class parent extends Component {
  constructor(){
    super();
    this.state ={
      catname:""
    }
this.dataTransferComp =this.dataTransferComp.bind(this);
    
  }
  dataTransferComp(dataFromLeft){
console.log('parent Comp method', dataFromLeft);
console.log(this)
  }
  
  render() {
    return (
      <div className='container border'>
      <div className='row'>
      <div className='col-md-3'>
      <Left xyz={this.dataTransferComp} />
      </div>
      <div className='col-md-9'>
      <Right abc={this.state.catname}/>
      </div>
      </div>
      </div>
    )
  }
}
