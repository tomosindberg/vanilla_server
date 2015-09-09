var chai = require('chai');
var chaiHttp = require('chai-http');
var httpServer = require('./server');
chai.use(chaiHttp);

// describe('greet', function() {
//   it('', function() {
//     expect(colPalette[20]).to.not.eql(null);
//     console.log('data exists test');
//   });
// });


// describe('time', function() {
//   it('should change the data from CPalette', function() {
//     expect(colPalette.darken[0]).to.not.eql(0);
//     console.log('color change test');
//   });
// });

chai.request('localhost:3000')
  .get('/')
  // .put('/greet/tomo')
  .send({ person: 'tomo', })
  .then(function (res){
    expect(res).to.have.status(200);
  })
  .catch(function(err) {
    throw err;
  });