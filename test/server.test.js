// const superTest = require('supertest');

// const request = superTest('http://localhost:3001');
// test('Deve responder na porta 3001', () => {
//   // Acessar a url http://localhost::3001
//   return request.get('/').then(res => expect(res.status).toBe(200));
//   //verificar se a resposta foi o status 200
// });

// Path: test/server.test.js
const superTest = require('supertest');
// importar o app
const app = require('../src/app');
// criar uma instancia do supertest
const request = superTest(app);
test('Deve responder na porta 3001', () => {
  // Acessar a url http://localhost::3001
  return request.get('/').then(res => expect(res.status).toBe(200));
  //verificar se a resposta foi o status 200
} );
