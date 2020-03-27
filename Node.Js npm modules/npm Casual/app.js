// Create a simple program that outputs the following statement in the terminal. 
// Use casual to create the (fake data):

const casual = require('casual');

let results = `
    Hello there ${casual.first_name}! 
    How was your trip to ${casual.country}? 
    Did you get to visit ${casual.city}? 
    I sure do hope you had a wonderful time. 
    Is your phone number still ${casual.phone}?
    I will try to give you a call sometime. 
    By the way, I want to send you a fresh loaf of bread at 
    your address of:
         ${casual.address1}. 
    Well, I will see you soon. 
    I will be visiting sometime before ${casual.month_name}. 
    Until then, farewell!
`

console.log(results)