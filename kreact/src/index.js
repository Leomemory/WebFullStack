// import React from 'react';
import React,{Component} from './kreact'

// import ReactDOM from "react-dom";
import ReactDOM from './kreact-dom.js'


function Comp(props) {
    return <h2>组件名字 {props.name}</h2>;
}

class Comp2 extends Component{
    render(){
        return(
            <h2>hello,{this.props.name}</h2>
        );
    }
}

const users = [
    {name:"leo",age:19},
    {name:"jerry",age:32},
    {name:"liesv",age:23}
]

// vdom
const jsx = (
    <div id="demo" onClick={()=>alert('on事件')} style={{color:"red",border:"1px solid green"}}>
       <span>hi</span>
       <Comp name="函数组件" />
       <Comp2 name="类组件" />
       <ul>
           {
                users.map(user=>(
                 <li key={user.name}>{user.name}</li>    
                ))
           }
       </ul>
    </div>
);
console.log(jsx)

ReactDOM.render(jsx, document.querySelector('#root'))