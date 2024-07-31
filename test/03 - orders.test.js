require('dotenv').config();

const request = require('supertest');
const app = require('../app');
const { dbConnect, sequelize } = require('../config/mysql');

beforeAll(async () => {
    await dbConnect();
});

afterAll(async () => {
    await sequelize.close();
});

describe('[ORDER] Test to create an company as Portal User', () => {
    /**
     * Intentando crear empresa sin enviar la API KEY
     */
    test("Must return a 401 code", async () => {
        const response = await request(app).post('/api/companies');
        expect(response.statusCode).toEqual(401);
    });

    /**
     * Al intentar registrar sin la estructura correcta, el handlerValidator debe devolver un 403
     */
    test("Must return a 403 code", async () => {
        const response = await request(app)
            .post('/api/companies')
            .set('api_key', process.env.API_KEY_PORTAL)
            .send({});

        expect(response.statusCode).toEqual(403);
    });

    /**
     * Al enviar todos los parámetros, debe registrar la empresa registrada y state code 201
     */
    test("Must return a 201 code and a company object", async () => {
        const company = {
            "created_at": "2024-07-29T21:00:00",
            "status_id": 1
        }

        const response = await request(app)
            .post('/api/companies')
            .set('api_key', process.env.API_KEY_PORTAL)
            .send(company);

        expect(response.statusCode).toEqual(201);
        expect(response.type).toBe('application/json');
        expect(response.body).toHaveProperty('company');
    });
});

describe('[COMPANY] Test to create an company as SAP User', () => {
    /**
     * Intentando crear empresa sin enviar la API KEY
     */
    test("Must return a 401 code", async () => {
        const response = await request(app).post('/api/companies');
        expect(response.statusCode).toEqual(401);
    });

    /**
     * Al intentar registrar sin la estructura correcta, el handlerValidator debe devolver un 403
     */
    test("Must return a 403 code", async () => {
        const response = await request(app)
            .post('/api/companies')
            .set('api_key', process.env.API_KEY_SAP)
            .send({});

        expect(response.statusCode).toEqual(403);
    });

    /**
     * Al enviar todos los parámetros, debe registrar la empresa registrada y state code 201
     */
    test("Must return a 201 code and a company object", async () => {
        const company = {
            "created_at": "2024-07-29T21:00:00",
            "status_id": 1
        }

        const response = await request(app)
            .post('/api/companies')
            .set('api_key', process.env.API_KEY_SAP)
            .send(company);

        expect(response.statusCode).toEqual(201);
        expect(response.type).toBe('application/json');
        expect(response.body).toHaveProperty('company');
    });
});
