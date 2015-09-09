var expect = require('chai').expect;
var httpServer = require('./server');


describe('greet', function() {
  it('', function() {
    expect(colPalette[20]).to.not.eql(null);
    console.log('data exists test');
  });
});


describe('time', function() {
  it('should change the data from CPalette', function() {
    expect(colPalette.darken[0]).to.not.eql(0);
    console.log('color change test');
  });
});