// const functionWithFunctionAsArgument = (argToFunction) => {
//     console.log(`functionWithFunctionAsArgument`);
//     argToFunction();
// }

// const functionToBePassedAsArg = () => {
//     console.log(`functionToBePassedAsArg`);
// }

// functionWithFunctionAsArgument(functionToBePassedAsArg);


const fun1 = (arg) => {
    console.log(`fun1`)
    arg(); // function call back
}
//fun2 is call back function
// const fun2 = () => {
//     console.log(`fun2`)
// }

// fun1(fun2);

fun1(
    () => {
        console.log(`funX`)
    }
);

fun1(function () {
    console.log('old style funX');
});






// public class App {

// 	static void fun1(int i) {
// 		System.out.println(i);

// 	}

// 	public static void main(String[] args) {

// 		System.out.println("aaa");

// 		int abc = 10;
// 		fun1(abc);

// 		fun1(10); // this line

// 	}

// }