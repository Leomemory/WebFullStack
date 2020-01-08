// const fs = require('fs')
// const data = fs.readFileSync("./package.json");
// console.log(data.toString())



// const fs = require('fs')
// fs.readFile("./package.json",(err,data)=>{
//     console.log(data.toString())
// })



// const fs = require('fs');
// const { promisify } = require('util')
// const readfile  =promisify(fs.readFile)
// readfile('./package.json').then(data=>{
//     console.log(data.toString())
// })


(async()=>{
    const fs = require('fs');
    const { promisify } = require('util')
    const readfile  =promisify(fs.readFile)
    const data = await readfile('./package.json');
    console.log(data.toString())
})()