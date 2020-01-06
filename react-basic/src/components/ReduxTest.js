import React from 'react';
// import store from '../store'
import { connect } from 'react-redux'
import {add, minus, asyncAdd} from "../store/count.redux.js"

// function ReduxTest(){
//     return (
//         <div>
//             <p>{store.getState()}</p>
//             <div>
//                 <button onClick={()=>store.dispatch({type:"minus"})}>-</button>
//                 <button onClick={()=>store.dispatch({type:"add"})}>+</button>
//             </div>
//         </div>
//     )
// };



// 使用react-redux简化redux使用难度
// const mapStateToProps = state => ({ num: state });
// const mapDispatchToProps = { 
//     add:()=>({type:"add"}),
//     minus:()=>({type:"minus"})
// };

// function ReduxTest({num,add,minus}){
//     return (
//         <div>
//             <p>{num}</p>
//             <div>
//                 <button onClick={minus}>-</button>
//                 <button onClick={add}>+</button>
//             </div>
//         </div>
//     )
// };

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(ReduxTest);



// 装饰器写法
const mapStateToProps = state => ({ num: state.counter });
// const mapDispatchToProps = { 
//     add:()=>({type:"add"}),
//     minus:()=>({type:"minus"}),
//     asyncAdd:()=>dispatch=>{
//         //做异步操作
//         setTimeout(()=>{
//             dispatch({type:"add"})
//         },1500)
//     }
// };
const mapDispatchToProps = {add, minus, asyncAdd};
@connect(
    mapStateToProps,
    mapDispatchToProps
  )
  class ReduxTest extends React.Component {
    render() {
      const { num, minus, add, asyncAdd } = this.props;
      return (
        <div>
          <p>{num}</p>
          <div>
            <button onClick={minus}>-</button>
            <button onClick={add}>+</button>
            <button onClick={asyncAdd}>AsyncAdd</button>
          </div>
        </div>
      );
    }
  }
  export default ReduxTest;