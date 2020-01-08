(async () => {
    const Sequelize = require("sequelize");

    // 建立连接
    const sequelize = new Sequelize("quanzhan1", "root", "SHA25634", {
        host: "localhost",
        dialect: "mysql",
        operatorsAliases: false
    });

    // 定义模型
    const Fruit = sequelize.define("Fruit", {
        name: { 
            type: Sequelize.STRING(20), allowNull: false,
            // get() {
            //     const fname = this.getDataValue("name");
            //     const price = this.getDataValue("price");
            //     const stock = this.getDataValue("stock");
            //     return `${fname}(价格：￥${price} 库存：${stock}kg)`;
            // }
        },
        price: {type: Sequelize.FLOAT, allowNull: false },
        stock: { type: Sequelize.INTEGER, defaultValue: 0 },
    },{
        timestamps: false,
        getterMethods: {
            amount() {
                return this.getDataValue("stock") + "kg";
            }
        },
        setterMethods: {
            amount(val) {
                const idx = val.indexOf('kg');
                const v = val.slice(0, idx);
                this.setDataValue('stock', v);
            }
        }
    });

    Fruit.classify = function (name) {
        const tropicFruits = ['香蕉', '芒果', '椰子']; // 热带水果
        return tropicFruits.includes(name) ? '热带水果' : '其他水果';
    };

    Fruit.prototype.totalPrice = function (count) {
        return (this.price * count).toFixed(2);
    };

    ['香蕉', '草莓'].forEach(f => console.log(f + '是' + Fruit.classify(f)));

    // 同步数据库,force: true则会删除已存在表
    let ret = await Fruit.sync();
    console.log('ret',ret)

    ret = await Fruit.create({
        name: "香蕉",
        price: 3.5
    })
    console.log('create', ret)

    ret = await Fruit.findAll()
    console.log("findAll",JSON.stringify(ret))

    // Fruit.findAll().then(fruits => {
    //     const [f1] = fruits;
    //     console.log(`买5kg${f1.name}需要￥${f1.totalPrice(5)}`);      
    // });
})()