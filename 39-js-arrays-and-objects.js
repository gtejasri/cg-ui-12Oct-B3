

function fun2() {
    console.log('fun2 output');
}

class SomeClass {

    fun() {
        console.log('fun output');
    }

}

//SomeClass obj=new SomeClass();//Java
let obj = new SomeClass();//JavaScript//object of a class

obj.fun();
fun2();


// In JSON,objects are created in two ways-
// 1.object of a class
let obj2 = new SomeClass();

// 2.proper Javascript object/Json object
let obj3 = { eid: 101, ename: 'Sonu', salary: 10.5 };//JSON object
let obj4 = {
    cid: 201, cname: 'aaa', address: { street: 'abc', pin: 123456 },
    phones: [12345678, 789045678]
}

console.log(obj4);