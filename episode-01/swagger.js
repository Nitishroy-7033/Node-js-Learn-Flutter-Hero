const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Description'
  },
  host: 'localhost:3000'
};

const outputFile = './swagger.json';
const routes = ['./routes/userRoutes.js'];

swaggerAutogen(outputFile, routes, doc).then(() => {
  console.log('Swagger documentation generated.');
});