function lengthFn(dog){
    if(typeof dog === "boolean") {
        return 1
    } else {
        return dog.toString().length
    }

    // NOTE: this does the same as above but with ternary operator
    // return typeof dog === 'boolean' ? 1 : dog.toString().length
    
}

module.exports = lengthFn;