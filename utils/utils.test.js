const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
    var result = utils.add(33, 11);
    expect(result).toBe(44).toBeA('number');
});

it('should async add two numers', (done) => {
  utils.asyncAdd(4,3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
  });
});


it('should square a number', () => {
    var result = utils.sqrt(3);
    expect(result).toBe(9).toBeA('number');
});

//it('should expect some values', () => {

    // expect(12).toNotBe(11);
    // expect({name: 'Ergun'}).toEqual({name: 'Ergun'});
    // expect({name: 'ergun'}).toNotEqual({name: 'Ergun'});
    // expect([2,3,4]).toInclude(2);
    // expect([2,3,4]).toExclude(1);
    // expect({
    //   name: 'Ergun',
    //   age: 29,
    //   location: 'London'
    // }).toInclude({
    //   age: 29
    // });

    // expect({
    //     name: 'Ergun',
    //     age: 29,
    //     location: 'London'
    // }).toExclude({
    //     age: 23
    // });
//});
it('should verify first and last name are set', () => {
  var user = {
    location: 'London',
    age: 25
  };
  var res = utils.setName(user,'Ergun Polat');

  expect(res).toInclude({
    firstName: 'Ergun',
    lastName: 'Polat'
  });
});
