// This is sync code - direct return pattern
// function hide(str) { 
//     return str.replace(/[a-zA-Z]/g, 'X')
// }

// var hidden = hide("Hello Stooopids!")

// console.log(hidden);


//----------------------------------------//
// continuation passing style - still sync
//----------------------------------------//
// function hide(str, cb) { 
//     cb(str.replace(/[a-zA-Z]/g, 'X'))
// }

// hide("Hello Stooopids!", 

//     function(val) {
//         console.log(val)
//     }
// )

// console.log("done")


//----------------------------------------//
// continuation passing style - still sync//
//              made async                //
//----------------------------------------//
// function hide(str, cb) { 
//     process.nextTick(
//         function(){
//             cb(str.replace(/[a-zA-Z]/g, 'X')) // process. will make it asycn - puts it on the event queue
//             console.log('nextTick done')
//         }
//     ) 
// }

// hide("Hello Stooopids!",  // call backs are the ones who are placed on queue

//     function(val) {
//         console.log(val)
//     }
// )

// console.log("done")


//----------------------------------------//
//    continuation passing style -         //
//              is async                  //
//----------------------------------------//

// function pause(secs, cb) {
//     setTimeout(cb, secs*1000)
// }

// pause(2, function(){   //2 = secs, function = cb - was placed in the event queu
//     console.log('After 2 seconds')
//     pause(1, function(){ 
//         console.log("After 1 seconds")   // this gets logged last after sec 2 function
//     })
// })   // will console.log after 2 secs pass.

// pause(1, function(){   // was placed in the event queu but for a 1 sec
//     console.log("After 1 seconds")
// })   // console log fo 1 sec was logged first

// console.log("done");



//----------------------------------------//
//                                        //
//              promises                  //
//----------------------------------------//

// Q
// Bluebird

// promisifying a setTimeout
// var pause = (secs) => {
//     return (new Promise(function(resolves, rejects){
//             setTimeout(function(){
//                 resolves('the pause has ended')
//             }, secs*1000)
//     }))
// }

// // pause is then-able (you can use .then)
// pause(1)
// .then(console.log) // will print resolves("the pause has ended")
// .then(function(){
//     console.log("1 Second!")
// })
// .then( () => 42)
// .then( (num) => { console.log(`Hello, the magic number is ${num}`)}) // 42 was picked up from prev promise
// .catch( () => 'Errored out') // incase of an Error


/////////-------------------Operators---------------------------//////////

// function square(x){
//     return Math.pow(x, 2) // square root x by 2
// }
// console.log(square(3))

// function square2(x){
//     if (typeof x == 'number'){
//         return Math.pow(x, 3) // square root x by 3
//     }
//     return null
// }
// console.log(square2(3))

// // operator associativity 

// var rom = 2;
// var rem = 3;
// var rum =4
// rom = rem = rum
// console.log(rum, rem, rom);

// //--------Coercion--------------//

// console.log(10 < 20 < 30) // 10 < 20 so its true, js changes true to 1, 1 < 30 is true...prints true

// console.log(30 < 20 < 10) // 30 < 20 is false, js changes false to 0, 0 < 10 is true...prints true

// Number(0); // 0
// Number('0'); // 0
// Number(true); // 1
// Number(false); // 0
// Number(null); // 0

// ==  allows coercion, === does not allow coercion EX false == 0 : true false === 0 : flase


//-------Testing for Existence---------//

// var a = {name: 'Jaime'};

// if (a) { // checking if a exists
//     console.log('The value of a is: ' + JSON.stringify(a))
// }

// var b = 'false';

// if (b) {
//     console.log('The value of b is: ' + b)
// }

// var c = 0;

// if (c || c === 0){
//     console.log('The value of a is: ' + c)
// }


//------------Objects-----------//

// var lady = new Object()

// lady.name = 'Mary';
// console.log(lady);

// lady.demographic = new Object();
// console.log(lady);

// lady.demographic.age = 25;
// console.log(lady);

// lady.demographic.haircolor = 'Brown';
// console.log(lady);

// console.log(JSON.stringify(lady)); // will turn lady into a string


// ------- The Idea of This -----------//
// "use strict"; // look up use strict
// var myFn = function(){
//     console.log('First THIS: ', this);
//     this.myVar = 'HA HA';
//     console.log('Second THIS: ', this);
// }

// myFn();

function myFunc(){
    return(
        'This is run from myFunc'
    );
}
console.log(myFunc());