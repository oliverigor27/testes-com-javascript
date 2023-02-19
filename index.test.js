const request = require("supertest");
const app = require("./src/server.js");

describe('Test My app server', () => {
    it('Should get main route', async () => {
        const res = await request(app).get('/');

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('greeting');
    })
})