const ceshi = {
    info:{name: 'leo', desc:'leo太棒了'},
    get name(){
        console.log('get .....')
        return this.info.name
    },
    set name(val) {
        this.info.name = val + '!!!'
    }
}
console.log(ceshi.name)
ceshi.name = 'CESHI'  //set方法设置测试
console.log(ceshi.name)


//单独测试文件