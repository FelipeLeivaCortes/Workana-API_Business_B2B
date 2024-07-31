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

describe('[ARTICLE] Test to create an article as Portal User', () => {

    /**
     * Intentando crear artículo sin enviar la API KEY
     */
    test("Must return a 401 code", async () => {
        const response = await request(app).post('/api/articles');
        expect(response.statusCode).toEqual(401);
    });

    /**
     * Intentando registrar artículo
     */
    test("Must return a 401 code", async () => {
        const response = await request(app)
            .post('/api/articles')
            .send({})
            .set('api_key', process.env.API_KEY_PORTAL);
        expect(response.statusCode).toEqual(401);
    });
});

describe('[ARTICLE] Test to create an article as SAP User', () => {

    /**
     * Intentando crear artículo sin enviar la API KEY
     */
    test("Must return a 401 code", async () => {
        const response = await request(app).post('/api/articles');
        expect(response.statusCode).toEqual(401);
    });

    /**
     * Al intentar registrar sin la estructura correcta, el handlerValidator debe devolver un 403
     */
    test("Must return a 403 code", async () => {
        const response = await request(app)
            .post('/api/articles')
            .set('api_key', process.env.API_KEY_SAP)
            .send({});

        expect(response.statusCode).toEqual(403);
    });

    /**
     * Al enviar todos los parámetros, debe registrar el artículo y devolver un 201
     */
    test("Must return a 201 code", async () => {
        const article = {
            ar_name: "Name",
            ar_desc: "Descuento",
            ar_characteristics: "Características",
            ar_img_url: "my_url",
            mt_id: 1,
            cat_id: 1
        }

        const response = await request(app)
            .post('/api/articles')
            .set('api_key', process.env.API_KEY_SAP)
            .send(article);

        expect(response.statusCode).toEqual(201);
        expect(response.type).toBe('application/json');
        expect(response.body).toHaveProperty('article');
    });
});