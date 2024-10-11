require('dotenv').config();

const swaggerJsdoc = require('swagger-jsdoc');

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Documentación API B2B",
        version: "1.0.0"
    },
    servers: [
        {
            url: `http://localhost:${process.env.APP_PORT}/api`
        },
        {
            url: `https://api.businessandconnection.com/api`
        }
    ],
    components: {
        securitySchemes: {
            BearerAuth: {
                type: 'http',
                scheme: 'bearer'
            }
        },
        schemas: {
            articulo: {
                type: "object",
                required: [
                    "ar_name",
                    "ar_desc",
                    "ar_code",
                    "ar_characteristics",
                    "ar_img_url",
                    "mt_id",
                    "cat_id"
                ],
                properties: {
                    ar_name: { type: "string" },
                    ar_desc: { type: "string" },
                    ar_code: { type: "string" },
                    ar_characteristics: { type: "string" },
                    color_id: { type: "integer" },
                    ar_measurement_value: { type: "number", format: "float" },
                    ar_img_url: { type: "string" },
                    ar_data_url: { type: "string" },
                    mt_id: { type: "integer" },
                    cat_id: { type: "integer" },
                    sbcat_id: { type: "integer" },
                    status_id: { type: "integer" }
                }
            },
            cliente: {
                type: "object",
                required: [
                    "created_at",
                    "status_id"
                ],
                properties: {
                    c_name: { type: "string" },
                    c_desc: { type: "string" },
                    c_num_nit: { type: "string" },
                    c_num_ver_nit: { type: "integer" },
                    c_route_rut: { type: "string" },
                    c_route_cc_representant: { type: "string" },
                    c_chamber_commerce: { type: "string" },
                    c_form_inscription: { type: "string" },
                    c_certificate_bank: { type: "string" },
                    c_street: { type: "string" },
                    c_apartament: { type: "string" },
                    c_country: { type: "string" },
                    c_city: { type: "string" },
                    c_state: { type: "string" },
                    c_postal_code: { type: "integer" },
                    c_shippingStreet: { type: "string" },
                    c_shippingApartament: { type: "string" },
                    c_shippingCountry: { type: "string" },
                    c_shippingCity: { type: "string" },
                    c_shippingState: { type: "string" },
                    c_shippingPostalcode: { type: "integer" },
                    c_dateQuoteValidity: { type: "string", format: "date-time" },
                    created_at: { type: "string", format: "date-time" },
                    id_subs: { type: "integer" },
                    tpi_id: { type: "integer" },
                    status_id: { type: "integer" },
                    s_id: { type: "integer" }
                }
            },
            orden_venta: {
                type: "object",
                required: [
                    "order_name",
                    "order_desc",
                    "order_date",
                    "order_payment_method",
                    "order_company",
                    "order_shipping_address",
                    "order_email",
                    "order_comments",
                    "order_subtotal",
                    "order_iva",
                    "order_total",
                    "order_discount_total",
                    "order_addition_cost",
                    "u_id"
                ],
                properties: {
                    order_name: { type: "string" },
                    order_desc: { type: "string" },
                    order_date: { type: "string", format: "date-time" },
                    order_payment_method: { type: "string" },
                    order_company: { type: "string" },
                    order_shipping_address: { type: "string" },
                    order_email: { type: "string" },
                    order_phone: { type: "string" },
                    order_comments: { type: "string" },
                    order_cedula_nit: { type: "string" },
                    order_subtotal: { type: "number", format: "float" },
                    order_iva: { type: "number", format: "float" },
                    order_total: { type: "number", format: "float" },
                    order_discount_total: { type: "number", format: "float" },
                    order_addition_cost: { type: "number", format: "float" },
                    order_url_document: { type: "string" },
                    u_id: { type: "integer" },
                    order_state_id: { type: "integer" }
                }
            },
            lista_precios: {
                type: "object",
                required: [
                    "ar_id",
                    "wh_id",
                    "p_value"
                ],
                properties: {
                    ar_id: { type: "integer" },
                    wh_id: { type: "integer" },
                    p_value: { type: "number", format: "float" }
                }
            },
            oferta_venta: {
                type: "object",
                required: [
                    "quo_name",
                    "quo_desc",
                    "quo_date",
                    "quo_payment_method",
                    "quo_company",
                    "quo_shipping_address",
                    "quo_email",
                    "quo_phone",
                    "quo_subtotal",
                    "quo_iva",
                    "quo_total",
                    "quo_discount_total",
                    "quo_addition_cost",
                    "u_id"
                ],
                properties: {
                    quo_name: { type: "string" },
                    quo_desc: { type: "string" },
                    quo_date: { type: "string", format: "date-time" },
                    quo_payment_method: { type: "string" },
                    quo_company: { type: "string" },
                    quo_shipping_address: { type: "string" },
                    quo_email: { type: "string" },
                    quo_phone: { type: "string" },
                    quo_comments: { type: "string" },
                    quo_cedula_nit: { type: "string" },
                    quo_subtotal: { type: "number", format: "float" },
                    quo_iva: { type: "number", format: "float" },
                    quo_total: { type: "number", format: "float" },
                    quo_discount_total: { type: "number", format: "float" },
                    quo_addition_cost: { type: "number", format: "float" },
                    quo_url_document: { type: "string" },
                    u_id: { type: "integer" },
                    quote_state_id: { type: "integer" }
                }
            },
            almacen: {
                type: "object",
                required: [
                    "c_id"
                ],
                properties: {
                    wh_name: { type: "string" },
                    wh_desc: { type: "string" },
                    wh_code: { type: "string" },
                    wh_address: { type: "string" },
                    wh_departament: { type: "string" },
                    wh_city: { type: "string" },
                    wh_date: { type: "string", format: "date-time" },
                    wh_responsible: { type: "string" },
                    wh_phone: { type: "string" },
                    c_id: { type: "integer" }
                }
            },
            metodo_pago: {
                type: "object",
                required: [],
                properties: {
                    name: { type: "string"}
                }
            }
        }
    },
    security: [
        {
            BearerAuth: [
                "articulos",
                "clientes",
                "ordenes_venta",
                "lista_precios",
                "oferta_ventas",
                "almacenes",
                "metodo_pago"
            ]
        }
    ]
};

const options = {
    swaggerDefinition,
    apis: [
        "./routes/*.js"
    ]
};

const openApiConfiguration = swaggerJsdoc(options);

module.exports = openApiConfiguration;