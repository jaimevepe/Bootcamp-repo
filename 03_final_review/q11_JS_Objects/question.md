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

