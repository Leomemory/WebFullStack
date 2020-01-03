<template>
   <div>
       {{msg}}

       {{foo}}

       {{sname}}
       <ul>
           <li v-for="f in features" :key="f.id">{{f}}  {{f.name}}</li>
           <li>特性数量：{{featureCount}}</li>
       </ul>

        <p>
           <input type="text" placeholder="输入特性名称" @keyup.enter="addFeature">
        </p>
   </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit,Watch } from "vue-property-decorator";

//自定义约束
export class Feature {
  constructor(public id: number, public name: string, public version: string) {}
}

interface Result<T> {
  ok: 0 | 1;
  data: T[];
}
// 泛型函数
function getData<T>(): Promise<Result<T>> {
  const data: any[] = [
    { id: 1, name: "类型注解", version: "2.0" },
    { id: 2, name: "编译型语言", version: "1.0" }
  ];
  return Promise.resolve({ ok: 1, data } as Result<T>);
}

//类型注解
let title:String;
let name = 'xxx';  //类型推论

//数组类型
let names = [];
names = ['dsd','adfv'];

// 任意类型
let list: any[] = [1, true, "free"];
list[0] = "lala";

// 函数中使用
function greeting(person: string): string {
  return "hello, " + person;
}
greeting("tom");

// void类型
function warn(): void {
  alert("warning!!!");
}

// 内置类型：string,number,boolean,void,any

// ts函数中如果声明，就是必选参数
function sayHello(name: string, age: number = 20): string {
  return name + " " + age;
}
sayHello("tom", 20);
sayHello("tom");

// 函数重载：多个同名函数，通过参数数量或者类型不同或者返回值不同
function info(a: { name: string }): string;
function info(a: string): object;
function info(a: any): any {
  if (typeof a === "object") {
    return a.name;
  } else {
    return { name: a };
  }
}
info({ name: "jerry" });
info("jerry");

//继承
class Shape {
  readonly foo: string = "foo";
  protected area: number;

  constructor(public color: string, width: number, height: number) {
    this.area = width * height;
  }

  shoutout() {
    return (
      "I'm " + this.color + " with an area of " + this.area + " cm squared."
    );
  }
}
class Square extends Shape {
  constructor(color: string, side: number) {
    super(color, side, side);
    console.log(this.color);
  }
  shoutout() {
    return "我是" + this.color + " 面积是" + this.area + "平方厘米";
  }
}
const square: Square = new Square("blue", 2);
console.log(square.shoutout());


class Employee {
  private firstName: string = "Mike";
  private lastName: string = "James";

  get fullName(): string {
    return this.firstName + " " + this.lastName;
  }
  set fullName(newName: string) {
    console.log("您修改了用户名");
    this.firstName = newName.split(" ")[0];
    this.lastName = newName.split(" ")[1];
  }
}
const employee = new Employee();
employee.fullName = "Bob Smith";


// 接口约束结构
interface Person {
  firstName: string;
  lastName: string;
  sayHello(): string; // 要求实现方法
}
// 类实现接口
class Greeter implements Person {
  constructor(public firstName = "", public lastName = "") {}
  sayHello() {
    return "Hello, " + this.firstName + " " + this.lastName;
  }
}
function greeting2(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}
const user = { firstName: "Jane", lastName: "User", sayHello: () => "lalala" };
const user2 = new Greeter("a", "b");
console.log(user);
console.log(greeting2(user2));


@Component({
    props: {
        // 属性也可以在这里配置
        sname: {
            type: String,
            default: "匿名"
        }
    }
})
export default class Hello extends Vue {
    // private 仅当前类可用
    // protected 子类也可以用
    // public  都可以用
    @Prop() private msg!: string; // 属性msg必填项，字符串类型
    @Prop({ default: "匿名" }) private foo?: string; // 属性foo必填项，字符串类型

    // 生命周期
    async created() {
        //...
        const result = await getData<Feature>();
        this.features = result.data;
    }

    //普通属性相当于组件
    private features: Feature[] = [
        { "name": "云端技术", "id": 1, "version": "1.0" },
        { "name": "编译反编译", "id": 2, "version": "1.0" }
    ];

    // 计算属性
    get featureCount() {
        return this.features.length;
    }

    // addFeature(event:any){
    //     const feature = {
    //         name: event.target.value,
    //         id: this.features.length + 1,
    //         version: "1.0"
    //     };
    //     this.features.push(feature);
    //     event.target.value="";
    // }

    @Emit()
    private addFeature(event: any) {
        // 若没有返回值形参将作为事件参数
        const feature = {
            name: event.target.value,
            id: this.features.length + 1,
            version: "1.0"
        };
        this.features.push(feature);
        event.target.value = "";
        return feature; // 返回值作为事件参数
    }

    @Watch("msg")
    onRouteChange(val:string, oldVal:any){
        console.log(val, oldVal);
    }
}
</script>

<style>

</style>