const articleMessages = {
    "handleError": {
        "getArticles": "ERROR GET CONTROLLER ARTICLES",
        "getArticle": "ERROR GET CONTROLLER ARTICLE",
        "createArticle": "ERROR CREATE CONTROLLER ARTICLE",
        "updateArticle": "ERROR UPDATE CONTROLLER ARTICLE",
        "deleteArticle": "ERROR DELETE CONTROLLER ARTICLE"
    },
    "deleted": "artículo eliminado exitosamente",
    "notParameters": "NOT FOUND ALL PARAMETERS",
    "notFound": "ARTICLE NOT FOUND",
    "notCreated": "ARTICLE NOT CREATED",
    "notUpdated": "ARTICLE NOT UPDATED",
    "notDeleted": "ARTICLE NOT DELETED"
};

const companyMessages = {
    "handleError": {
        "getCompanies": "ERROR GET CONTROLLER COMPANIES",
        "getCompany": "ERROR GET CONTROLLER COMPANY",
        "createCompany": "ERROR CREATE CONTROLLER COMPANY",
        "updateCompany": "ERROR UPDATE CONTROLLER COMPANY",
        "deleteCompany": "ERROR DELETE CONTROLLER COMPANY"
    },
    "deleted": "cliente eliminado exitosamente",
    "notParameters": "NOT FOUND ALL PARAMETERS",
    "notFound": "COMPANY NOT FOUND",
    "notCreated": "COMPANY WAS NOT REGISTERED",
    "notUpdated": "COMPANY WAS NOT UPDATED",
    "notDeleted": "COMPANY WAS NOT DELETED"
};

const creditTransactionMessages = {
    "handleError": {
        "getCreditTransactions": "ERROR GET CONTROLLER CREDIT TRANSACTIONS",
        "getCreditTransaction": "ERROR GET CONTROLLER CREDIT TRANSACTION",
        "createCreditTransaction": "ERROR CREATE CONTROLLER CREDIT TRANSACTION",
        "updateCreditTransaction": "ERROR UPDATE CONTROLLER CREDIT TRANSACTION",
        "deleteCreditTransaction": "ERROR DELETE CONTROLLER CREDIT TRANSACTION"
    },
    "deleted": "transacción eliminada exitosamente",
    "notParameters": "NOT FOUND ALL PARAMETERS",
    "notFound": "CREDIT TRANSACTION NOT FOUND",
    "notCreated": "CREDIT TRANSACTION WAS NOT REGISTERED",
    "notUpdated": "CREDIT TRANSACTION WAS NOT UPDATED",
    "notDeleted": "CREDIT TRANSACTION WAS NOT DELETED",
    "deleted": "CREDIT TRANSACTION SUCCESSFULLY DELETED"
};

const orderMessages = {
    "handleError": {
        "getOrders": "ERROR GET CONTROLLER ORDERS",
        "getOrder": "ERROR GET CONTROLLER ORDER",
        "createOrder": "ERROR CREATE CONTROLLER ORDER",
        "updateOrder": "ERROR UPDATE CONTROLLER ORDER",
        "deleteOrder": "ERROR DELETE CONTROLLER ORDER"
    },
    "deleted": "orden de venta eliminada exitosamente",
    "notParameters": "NOT FOUND ALL PARAMETERS",
    "notFound": "ORDER NOT FOUND",
    "notCreated": "ORDER WAS NOT REGISTERED",
    "notUpdated": "ORDER WAS NOT UPDATED",
    "notDeleted": "ORDER WAS NOT DELETED",
};

const paymentMessages = {
    "handleError": {
        "getPayments": "ERROR GET CONTROLLER PAYMENTS",
        "getPayment": "ERROR GET CONTROLLER PAYMENT",
        "createPayment": "ERROR CREATE CONTROLLER PAYMENT",
        "updatePayment": "ERROR UPDATE CONTROLLER PAYMENT",
        "deletePayment": "ERROR DELETE CONTROLLER PAYMENT"
    },
    "deleted": "método de pago eliminado exitosamente",
    "notParameters": "NOT FOUND ALL PARAMETERS",
    "notFound": "PAYMENT NOT FOUND",
    "notCreated": "PAYMENT WAS NOT REGISTERED",
    "notUpdated": "PAYMENT WAS NOT UPDATED",
    "notDeleted": "PAYMENT WAS NOT DELETED",
};

const priceMessages = {
    "handleError": {
        "getPrices": "ERROR GET CONTROLLER PRICES",
        "getPrice": "ERROR GET CONTROLLER PRICE",
        "createPrice": "ERROR CREATE CONTROLLER PRICE",
        "updatePrice": "ERROR UPDATE CONTROLLER PRICE",
        "deletePrice": "ERROR DELETE CONTROLLER PRICE"
    },
    "deleted": "precio de lista eliminado exitosamente",
    "notParameters": "NOT FOUND ALL PARAMETERS",
    "notFound": "PRICE NOT FOUND",
    "notCreated": "PRICE WAS NOT REGISTERED",
    "notUpdated": "PRICE WAS NOT UPDATED",
    "notDeleted": "PRICE WAS NOT DELETED"
};

const quoteMessages = {
    "handleError": {
        "getQuotes": "ERROR GET CONTROLLER QUOTES",
        "getQuote": "ERROR GET CONTROLLER QUOTE",
        "createQuote": "ERROR CREATE CONTROLLER QUOTE",
        "updateQuote": "ERROR UPDATE CONTROLLER QUOTE",
        "deleteQuote": "ERROR DELETE CONTROLLER QUOTE"
    },
    "deleted": "Oferta de venta eliminada exitosamente",
    "notParameters": "NOT FOUND ALL PARAMETERS",
    "notFound": "QUOTE NOT FOUND",
    "notCreated": "QUOTE WAS NOT REGISTERED",
    "notUpdated": "QUOTE WAS NOT UPDATED",
    "notDeleted": "QUOTE WAS NOT DELETED",
};

const warehouseMessages = {
    "handleError": {
        "getWarehouses": "ERROR GET CONTROLLER WAREHOUSES",
        "getWarehouse": "ERROR GET CONTROLLER WAREHOUSE",
        "createWarehouse": "ERROR CREATE CONTROLLER WAREHOUSE",
        "updateWarehouse": "ERROR UPDATE CONTROLLER WAREHOUSE",
        "deleteWarehouse": "ERROR DELETE CONTROLLER WAREHOUSE"
    },
    "deleted": "almacén eliminado exitosamente",
    "notParameters": "NOT FOUND ALL PARAMETERS",
    "notFound": "WAREHOUSE NOT FOUND",
    "notCreated": "WAREHOUSE WAS NOT REGISTERED",
    "notUpdated": "WAREHOUSE WAS NOT UPDATED",
    "notDeleted": "WAREHOUSE WAS NOT DELETED",
};

module.exports = { articleMessages, companyMessages, creditTransactionMessages, orderMessages, paymentMessages, priceMessages, quoteMessages, warehouseMessages };
