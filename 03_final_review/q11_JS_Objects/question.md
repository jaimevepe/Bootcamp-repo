Consider the following code.  What would be console logged?  Why? (50%)

What would you change to address this issue (where the Apple type is
mis-represented in the last line below)? (50%)

    const apple = {
        type: 'Granny Smith',
        weight:  4
    }

    var orange = apple

    orange.type = 'Clementine'

    console.log('Apple type is ', apple.type)


-console log is Apple type is clementine. apple was assinged to var orange.
orange.type is mutating the existing type: 'Granny Smith' in the apple object which is now inside orange to 
type: 'clememtine'.

### Feedback:

You have not answered how to fix this. Within line 11, when you are 
copying apple object into orange object. You need to make a true copy
of the object using one of the following methods:

var orange = {...apple}
or
var orange = Object.assign({}, apple)
or
var orange = JSON.parse (   JSON.stringify(apple))

Also, apple object is NOT "inside orange" as you stated. In the provided
code both the variables `apple` and `orange` are pointing to the same
object. 

Folks have difficulty understanding this concept and hence I spent a lot
of time explaining it. I even provided the reference to the blog that
discusses this during the final. 

Not accepted.