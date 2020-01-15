//组合方法

//一个方法
// const add = (x,y)=> x+y;
// const square = z => z*z;
// const fn = (x,y) => square(add(x,y));
// console.log(fn(1,2))



//两个方法
// const add = (x,y)=> x+y;
// const square = z => z*z;
// const compose = (fn1,fn2) => (...args) => fn2(fn1(...args))
// const fn = compose(add,square)
// console.log(fn(2,3))



//多个方法
// const add = (x,y)=> x+y;
// const square = z => z*z;
// const compose = (...[first,...others]) => (...args) => {
//     let ret = first(...args)   //执行第一个方法
//     others.forEach(fn => {     //其余方法依次执行
//         ret = fn(ret)
//     })
//     return ret;
// }
// const fn = compose(add,square,square)
// console.log(fn(2,3))




function delay(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve()
        }, 2000);
    })
}

async function fn1(next){
    console.log("fn1");
    await next();
    console.log("end fn1");
}

async function fn2(next){
    console.log("fn2");
    await delay();
    await next();
    console.log("end fn2");
}

function fn3(next) {
    console.log("fn3");
}


function compose(middlewares){
    return function(){
        return dispatch(0);
        // 执⾏第0个
        function dispatch(i){
            let fn = middlewares[i];
            if (!fn) {
                return Promise.resolve();
            }
            return Promise.resolve(
                fn(function next(){
                    // promise完成后，再执⾏下⼀个
                    return dispatch(i + 1);
                })
            )
        }
    }
}

const middlewares = [fn1, fn2, fn3];
const finalFn = compose(middlewares);
finalFn()