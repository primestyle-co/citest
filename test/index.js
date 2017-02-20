process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../src/index');
let should = chai.should();

chai.use(chaiHttp);

describe('Index', () =>{
  describe('/GET index', () => {
    it('it should Get the message "Hello Node!!', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        }); // chai.request
    }); // it should Get the message "Hello Node!!
  });
});
