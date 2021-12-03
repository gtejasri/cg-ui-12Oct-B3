
// console.log("output 1");

// // setTimeout(callbackfunction,timeInMs);

// // let timeout = setTimeout(()=>{
// //     console.log("output 2");
// // },1000);
// // clearTimeout(timeout);
// // console.log("output 3");

// const getFun=()=>{
//     return {message:"fun message"};
// }

// const fun=getFun();
// console.log(fun.message);//depends on output2



// console.log("output 1");

// const getFun = () => {

//     setTimeout(() => {
//         return { message: "fun meesage" };
//     }, 2000);
// }

// const fun = getFun();

// console.log(fun.message); //  depends on output  2
// problems in asynchronous programming 
// console.log("output 1");
// const getFun = () => {
//     setTimeout(() => {
//         return { message: "fun meesage" }; // react to spring boot 
//     }, 2000);
// }
// // TypeError: Cannot read property 'message' of undefined
// const fun = getFun();
// console.log(fun.message); //  depends on output  2

// // solution 1. - use callback 

// console.log("output 1");
// const getFun = (abc) => {
//     setTimeout(() => {
//         abc({ message: "fun meesage" }); // callback 
//     }, 2000);
// }

// const funCall = (arg) => {
//     console.log(arg.message);
// }

// // success 
// getFun(funCall);








// // problems in asynchronous programming 
// console.log("output 1"); // 1
// const getFun = () => {
//     setTimeout(() => {
//         return { message: "fun meesage" }; // react to spring boot 
//     }, 2000);
// }
// // TypeError: Cannot read property 'message' of undefined
// const fun = getFun(); // 2, but delayed 
// console.log(fun.message); //  3, fails because it depends on output  2

// solution 1. - use callback 
// console.log("output 1"); // 1 

// const getFun = (abc) => {  // 3
//     setTimeout(() => {
//         abc({ message: "fun meesage" }); // callback  // 4
//     }, 2000);
// }
// const funCall = (arg) => { // 5 
//     console.log(arg.message);  // 6
// }
// // success 
// getFun(funCall); // 2 

// solution 2 -  use Promise  
console.log("output 1"); // 1 

const getFun = () => {  // 3
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const err = true; // true / false  
            if (err)
                reject();
            else
                resolve({ message: "fun meesage" });
        }, 2000);
    });
}

getFun().then((obj) => {
    console.log(obj.message);
}).catch(() => {
    console.log("Error...");
});

// use in React 
// const empData;
// axios.get("http:localhost:8082/getemp") 
//     .then((emp) => {
//         empData = emp;
//     })
//     .catch((e) => {
//         // 
//     });