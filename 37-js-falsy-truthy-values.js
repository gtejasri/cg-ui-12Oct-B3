//falsy values

let flag = 0;//null,undefined,false
if (flag) {
    console.log('truthy');
} else {
    console.log('falsy');
}

let flags = "Hello";//2,3,"Hello world",true,[],{},(array),(an object)
if (flags) {
    console.log('truthy');
} else {
    console.log('falsy');
}

//concept

//JS concept- any type of variable can be treated as a boolean variable

//truthy rest of values
//falsy-0,'',false,NaN,null,undefined

let ename;//number string boolean

ename = 1/0;

//ename !=null
//ename !=0
//if(ename has any type of value)

if (ename) {
    //this logic
    console.log('truthy');
}
else {
//other logic
console.log('falsy');
}