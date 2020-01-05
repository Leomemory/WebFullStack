// 高阶组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件
import React, { Component } from 'react';

const withHott = Comp => {
    // 获取name,name可能来自于接口或其他手段
    const name = "高阶组件";
    // return props => <Comp {...props} name={name} />

    return class extends React.Component {
        componentDidMount() {
          
        }
        render() {
          return <Comp {...this.props} name={name} />;
        }
    };
};

const withLog = Comp => {
    console.log(Comp.name + "渲染了");
    return props => <Comp {...props} />;
};

@withLog
@withHott
@withLog
class Hott extends Component {
    render() {
      return (
        <div>
          {this.props.stage}-{this.props.name}
        </div>
      );
    }
}

// const NewHott = withHott(Hott)
// const NewHott = withLog(withHott(withLog(Hott)))


class Hoc extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            // <NewHott stage="React" />
            <Hott stage="React" />
        );
    }
}
export default Hoc;