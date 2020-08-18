var myPets = [
    {   
        "type": "camel",
        "name": "Wednesday",
        "age": 8,
        "food": "Hay, mostly",
        "daily food quantity": 30
    },
    {
        "type": "cobra",
        "name": "Slitherio",
        "age": 2,
        "food": "Rodents",
        "daily food quantity": 0.05
    },
    {   
        "type": "elephant",
        "name": "Hathi",
        "age": 1,
        "food": "Plant matter, grass, hay, fruit",
        "daily food quantity": 50
    }
]

myPets.sort(function(a, b) {
    return a["daily food quantity"] - b["daily food quantity"]
})

console.log(myPets)