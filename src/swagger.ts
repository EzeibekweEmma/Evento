import swaggerJsdoc from "swagger-jsdoc";

const options = {
  swaggerDefinition: {
    swagger: "2.0",
    info: {
      title: "Evento Swagger",
      version: "1.0.0",
      description: "API for Evento API End Point Documentation",
    },
  },
  apis: ["./src/routes/*.route.ts"],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
