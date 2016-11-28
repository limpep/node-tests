const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {
    describe('GET /', () => {
        it('should return hello repsonse', (done) => {
            request(app)
                .get('/')
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found.'
                    })
                })
                .end(done);
        });
    });
    describe('GET /users', () => {
        it('should return my user object', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Ergun',
                        age: 29
                    });
                }).end(done);
        });
    });

});
