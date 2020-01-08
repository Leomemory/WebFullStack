const buf01 = Buffer.alloc(10)
console.log(buf01)

const buf02 = Buffer.from([1,2,3])
console.log(buf02)

const buf03 = Buffer.from('Buffer创建方法')
console.log(buf03.toString())

buf01.write('hello')
console.log("buf01:",buf01)

const buf04 = Buffer.concat([buf01,buf03])
console.log(buf04.toString('utf-8'))