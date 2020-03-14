<center>

## Mid-term Exam Practical Project

</center>

# You are required to complete **ONLY ONE** of the following 3 projects:

## Project 1:

This project is comprised of the following requirements:

1. As a website visitor, I should be able to convert from miles to kilometers, pounds to kilograms, and vice versa.  

1. The site should show me the converted values in real time. That is, as I type into miles input, the kilometers input should show the converted values. Same should happen as I type into the kilometers input box.

### Sample UI

You may develop the UI to look something like this, using Bootstrap, vanilla CSS or any other tool of your choice. You may style it as per your preference. Credit given for functional, well documented code. The values shown below are test values only.

<img src="images/metric.png" alt="" width="50%">

### Hints: 

Psuedo-code is provided below to help you complete this project. Remember to take this as far as you can.

1. Create a form with two input boxes of numeric type and no submit buttons. Provide labels so user can identify the correct input box.

1. Get JavaScript or jQuery reference handles to the two input boxes. Name them `kmInput` and `milesInput` so you know which is which.

1. Attach a onSubmit or onchange event handler to each of those boxes. The handler should read the value in the box, convert to miles or km as appropriate and update the value in the other box. Ensure that you only provide upto 2 decimal places, in the converted value as shown in the image provided.

1. Provide any user instruction as plain text or in any other form, so the users know how to use your converter. For example, tell the user to press "Return" if you have created a onsubmit handler.


# OR


## Project 2:

Your task is to make a JS function that can take any positive integer as an argument and return it with its digits re-arranged to create the highest possible number. You can get the highest number by arranging the digits in descending order in the number (see examples below).

Also, ensure that an invalid input would return 0 and that you are returning an integer.

Hint: you may use several Number, String and Array methods chained together to arrive at the desired result. 

### Examples:

    Input: 21445 Output: 54421

    Input: 145263 Output: 654321

    Input: 1254859723 Output: 9875543221

Hint: Think about string and array methods.  How can you use them to get the job done?


# OR

## Project 3:

Write a rot-13 converter in JavaScript for alphabetical passwords only (do not consider numbers or other characters). Do not copy from solutions available on the internet as few of them might make sense to you at this stage. It is better to attempt to write your own. Feel free to borrow code ideas from solutions on the net, if needed.

Rot13 is a very simple form of encryption algorithm.  The idea is that you take a password, and, for each character, you move it forward by 13 characters.  So if the character was "a", you would change it to "n".  If it were "C", you would change it to "P". It
would help to take a look at an [ASCII table](http://www.asciitable.com/) to visualize how the characters and their numeric codes are laid out.

You would have to convert characters into their corresponding numeric codes. And then convert the code + 13 back to the corresponding alphabetical character.

What would you do if the character was "q". In about 9 moves forward, you reach "z", i.e. the end of the character rope. In this case, the 10th would come back to the beginning and it would be "a". Hence the converted character after 13 moves forward would be "d". Or, "q" => "d".

You may use a few if-then-else's to accomplish this.

If this seems daunting, don't give up.  Take it as far as you can. With each code change, make sure that you code runs. Use `console.log` to see what's going on.


