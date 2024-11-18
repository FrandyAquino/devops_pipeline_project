const request = require('supertest');
const app = require('../backend/index.js');

describe('POST /register', () => {
    it('Debería registrar un usuario correctamente', async () => {
        const response = await request(app)
            .post('/register')
            .send({ name: 'Test User', email: 'test@example.com' });
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('Usuario registrado correctamente');
    });
});
