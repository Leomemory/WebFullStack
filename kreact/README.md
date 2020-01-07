
面试常见问题：react virtual dom是什么？说一下diff算法？

what？用 JavaScript 对象表示 DOM 信息和结构，当状态变更的时候，重新渲染这个 JavaScript 的对象结构。这
个 JavaScript 对象称为virtual dom；

diff 策略？
1） 同级比较，Web UI 中 DOM 节点跨层级的移动操作特别少，可以忽略不计。
2） 拥有相同类的两个组件将会生成相似的树形结构，拥有不同类的两个组件将会生成不同的树形结构。例如：div->p, CompA->CompB
3） 对于同一层级的一组子节点，通过唯一的key进行区分。