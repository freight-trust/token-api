import chai from 'chai';
import request from 'supertest';
import Server from '../server';

const { expect } = chai;

describe('token', () => {
  it('should get all token information', () => request(Server)
    .get('/contract/api/v1/token')
    .expect('Content-Type', /json/)
    .then(r => {
      expect(r.body)
        .to.be.an.an('array')
        .of.length(2);
    }));

  it('should add a new staking wallet', () => request(Server)
    .post('/contract/api/v1/token')
    .send({ name: 'test' })
    .expect('Content-Type', /json/)
    .then(r => {
      expect(r.body)
        .to.be.an.an('object')
        .that.has.property('name')
        .equal('test');
    }));

  it('should get an staking pool by id', () => request(Server)
    .get('/contract/api/v1/token/2')
    .expect('Content-Type', /json/)
    .then(r => {
      expect(r.body)
        .to.be.an.an('object')
        .that.has.property('name')
        .equal('test');
    }));
});
