// function log(target){
//     const desc = Object.getOwnPropertyDescriptors(target.prototype)
//     console.log(desc)
//     for (const key of Object.keys(desc)){
//         if (key === 'constructor'){
//             continue;
//         }
//         const func = desc[key]
//         console.log(func)
//         if(typeof func === 'function'){ 
//             Object.defineProperty(target.prototype, key, {
//                 value (...args){
//                     console.log('before'+ key)
//                     const ret = func.apply(this, args)
//                     console.log('after'+ key)
//                     return ret
//                 }
//             })
//         }
//     }
// }

// function readonly(target,key,desc){
//     console.log(desc)
//     desc.writable = false;
// }
// function validate(target,key,desc){
//     console.log(desc)
//     const func = desc.value
//     desc.value = function(...args){
//         for(let num of args){
//             if(typeof num !== 'number'){
//                 throw new Error('not a number')
//             }
//             return  func.apply(this, args)
//         }
//     }
// }
// @log
// class Numberic {
//    @readonly PI = 3.1415926
//    @validate
//     add(...nums){
//         return nums.reduce((p,n)=>(p+n),0)
//     }
// }
// const num = new Numberic().add(1,'2')
// // console.log(Numberic.prototype,num)
// new Numberic().PI = 100

// mobx
import {observable,computed,autorun} from 'mobx'
// observable.box
var num = observable.box(20)
var str = observable.box('20')
var bool = observable.box(false)
console.log(num.get(),str.get(),bool.get())
num.set(50)
str.set('50')
bool.set(true)
console.log(num.get(),str.get(),bool.get())
// array  object  map 
 const arr= observable(['a', 'b'])
 const obj= observable({a:1, b:2})
 const map = observable(new Map())
 console.log(arr,Array.isArray(arr))
 console.log(obj.a,obj.b)
 map.set('a',1)
 console.log(map.has('a'))
 console.log(map)

//  class 
class Store {
    @observable array = []
    @observable obj = {}
    @observable map = new Map()

    @observable str = 'hello'
    @observable num = 10
    @observable bool = true
    
    @observable price = 20;
    @observable amount = 1;

    @computed get total() {
        return this.price * this.amount;
    }

}
// computed 
var store = new Store()

// var res=computed(()=>{
//     return store.str + '/'+ store.num
// })

// console.log(res.get())
// store.str='world'
// store.num=30
// console.log(res.get())
// console.log(store.total)
//  autorun 
autorun(()=>{
    console.log(store.str + '/'+ store.num)
})
store.str='world1'
store.num=302
