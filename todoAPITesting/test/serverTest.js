const app = require('../server');
const test = require('supertest');
const supertest = require('supertest');


// describe('Run tests on todo api routes', function(){
//     it('1. Should return status of 200 using GET on /todos', function(done){
//         supertest(app)
//             .get('/todos')
//             .expect('Content-Type', /json/) //testing the datatype of result
//             .expect(200, done) // testing the status 200
//     });
//     it('2. Should POST - returning a status of 201 for posting a new todo item', function(done){
//         let todo = {description: 'Complete testing project', isComplete: false};
//         supertest(app)
//             .post('/todos')
//             .set('Accept', 'application/json')
//             .send(todo)
//             .expect(201)
//             .expect(/project/i, done)
//     });
//     it('3. Should PUT - with a 200 status', function(done){
//         let todo = {description: 'Test todo - delete me', isComplete: false};
//         supertest(app)
//         .post('/todos')
//         .set('Accept', 'application/json')
//         .send(todo)
//         .end(function(err, res){
//             if(err) throw err;
//             let insertedId = res.body.id;
//             supertest(app)
//             .put(`/todos/${insertedId}`)
//             .expect(200, {
//                 id: res.body.id,
//                 description: todo.description,
//                 isComplete: !todo.isComplete
//             }, done)
//         })
//     })
// })

describe('Run tests on todo api routes', function() {
    it('1. Should return status of 200 using GET on /todos ', function(done) {
        supertest(app)
        .get('/todos')
        .expect('Content-Type', /json/) // testing the data type of result
        .expect(200, done)      // testing the status 200
    })

    it('2. Should POST - returning a status of 201 for posting a new todo item ', function(done){
        let todo = {description: 'Complete testing project', isComplete: false}
        supertest(app)
        .post('/todos')
        .set('Accept', 'application/json') // you can set headers
        .send(todo)
        .expect(201)
        .expect(/project/i, done) // i - is to make it case insesitave
    })
    it('3. Should PUT - with a 200 status', function(done) {
       let todo = {description: 'Test todo - delete me!' , isComplete: false}
        supertest(app)
        .post('/todos')
        .set('Accept', 'application/json')
        .send(todo)
        .end(function(err, newTodo) {
            if(err) throw err;
            let insertedId = newTodo.body.id;
            supertest(app)
            .put(`/todos/${insertedId}`)
            .expect(200, {
                id: newTodo.body.id,
                description: todo.description,
                isComplete: !todo.isComplete
            }, done)
        })
    })
})
