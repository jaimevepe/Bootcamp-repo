// Faulty Solution

// function isIsogram(str){
//     let strObj = {}          // here we track occurrence of each alphabet

//     // don't care about case, convert to array and loop over it
//     return str.toLowerCase().split("").forEach(
//         function(letter) {
//             if(strObj[letter]){  // testing strObj property for each unique letter
//                 return false     // if a repeat letter found, then not an isogram
//             }
//             strObj[letter] = true // if not found, then the property is set to true
//         }
//     )
//     return true; 
// }

// var test = "Hello"

// console.log(`${test} ${isIsogram(test) ? "is" : "is not"} an isogram.`)

//----------------------------------------------------//

function isIsogram(string){
    var myArr = string.toLowerCase().split("")//took out the forEach

    var Obj = {}; //creating an empty object so we can loop through it 

    for ( let i = 0; i < myArr.length; i++){
                            // testing properties for each unique letter
        if (Obj[myArr[i]]){
            return false; // if a letter repeats then not an isogram || false
        }
        Obj[myArr[i]] = true; // if letters dont repeat, then true
    }
    console.log('true')
    return true;
};

var test = "Helo"

console.log(`${test} ${isIsogram(test) ? "is" : "is not"} an isogram.`)


// Feedback:

// This question was asked to get you to try your debugging skills.  You have supplied
// new code, which is easily available.  Hence, 1.5 point is deducted.  Please try the
// debugger as it is a very valuable skill to have.

