import React,{ Component} from "react";
import {MainContext,UserContext} from "../ContextApi";
import Child3 from './Child3';
class Child2 extends Component{
    render(){
        return(
        <div>Child2
         <hr/>
         <h1>Data in Child2</h1>
         <MainContext.Consumer>
         {
             value=>(
                 <p>{value}</p>
             )
         }
         </MainContext.Consumer>
         <hr/>
         <Child3 qrs={this.props.abc} />
        </div>
        )
    }
}
export default Child2;