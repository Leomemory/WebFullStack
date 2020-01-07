import { initVNode } from './kvdom'

// vnode -> dom
function render(vnode, container){
    // container.innerHTML = `<pre>${JSON.stringify(vnode,null,2)}</pre>`

    // 将虚拟dom树转换为真实dom
    const node = initVNode(vnode);
    container.appendChild(node);
}

export default {render}