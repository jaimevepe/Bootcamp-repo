var star = {
    knownAs: 'Julia Roberts',
    getName: function () {
        return this.knownAs;
    }
};
var starsName = Object.keys(star).map(function(e){
    return star[e]
})

console.log(starsName, star.getName());