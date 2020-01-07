import { createVNode } from "./kvdom";

//传过来标签的类型，该标签相关的属性,若干数量不等的孩子元素
function createElement(type, props, ...children){
    // console.log(arguments);
    props.children = children;
    delete props.__source;   //删除不必要的元素
    delete props.__self;

    // type: 标签类型，如div
    // vtype：组件类型
    let vtype;
    if (typeof type === "string") {
        //   原生标签
        vtype = 1;
    } else if (typeof type === "function") {
        if (type.isClassComponent) {
            // 类组件
            vtype = 2;
        } else {
            // 函数组件
            vtype = 3;
        }
    }

    // return {type, props}
    return createVNode(vtype,type,props)
}

export default { createElement };

export class Component{
    // 这个组件来区分是不是class组件
    static isClassComponent = true

    constructor(props){
        this.props = props
        this.state = {}
    }

    setState(){}
}