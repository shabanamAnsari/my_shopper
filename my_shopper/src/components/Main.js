import React,{ Component} from "react";
import Child1 from './Child1';
import {MainContext,UserContext} from "../ContextApi";
class Main extends Component{
constructor(){
    super();
    this.state = {
        cityname:"mumbai"
    }
}
myfunc(eventName){
    this.setState({
        cityname:eventName.target.value
    })
}
render(){
    return(
        <div className="container">
        <h1>Main</h1>
        <input type="text" onChange={(ev)=>{this.myfunc(ev)}}/>
        <hr/>
        <MainContext.Provider value={this.state.cityname}>
        <UserContext.Provider value="10">
        <Child1 xyz={this.state.cityname}/>
        </UserContext.Provider>
        </MainContext.Provider>
        </div>
    )
}
}
export default Main;