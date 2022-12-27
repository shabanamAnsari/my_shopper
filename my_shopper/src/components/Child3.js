import React,{ Component} from "react";
//import Child3 from './Child3';
import {MainContext,UserContext} from "../ContextApi";
class Child3 extends Component{
    render(){
        return(
        
         <div> Child3 main {this.props.qrs}
         <br/>
         <h2>Data from provider</h2>
         <MainContext.Consumer>
         {
             value1=>(
                 <UserContext.Consumer>
                 {
                     value2=>(
                         <div>
                         <p>{value1}</p>
                         <p>{value2}</p>
                         </div>
                     )
                 }
                 </UserContext.Consumer>
             )
         }
             </MainContext.Consumer>
         </div>

        )
    }
}
export default Child3;