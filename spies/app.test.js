const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app.js');

describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db',db);

  it('should call the spy correctly', () => {
      var spy = expect.createSpy();
      spy('Ergun',29);
          // spy('Ergun');
    //  expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('Ergun',29);
  });

  it('should call saveUser with user object', () => {
    var email ='example@example.com';
    var password = '123abc';
    app.handleSignup(email,password);
    expect(db.saveUser).toHaveBeenCalledWith({email,password});
  })
});
