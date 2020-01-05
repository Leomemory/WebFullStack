import React, { Component } from 'react';

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            comments: []
        }
    }

    componentDidMount() {
        setInterval(() => {
          this.setState({
            comments: [
              { body: "react is very good", author: "facebook" },
              { body: "vue is very good", author: "youyuxi" }
            ]
          });
        }, 1000);
    }

    render() { 
        return (  
            <div>
                {this.state.comments.map((c, i) => (
                  <Comment key={i} {...c} />
                ))}
            </div>
        );
    }
}

// 展示组件
// function Comment(data) {
//     console.log("render comment");      //会与原来的comments做对比，资源消耗

//     return (
//         <div>
//             <p>{data.body}</p>
//             <p> --- {data.author}</p>
//         </div>
//     ); 
// }


// 展示组件
// memo高阶组件，16.6版本以后
const Comment = React.memo(function(props) {
    console.log("render Comment");       //用高阶组件减少无谓的资源消耗
  
    return (
      <div>
        <p>{props.body}</p>
        <p> --- {props.author}</p>
      </div>
    );
});


export default CommentList;