/*
module.exports = {
    transform: {
        '^.+\\.js$': 'babel-jest', // Transforma archivos .js usando babel-jest
    },
    testEnvironment: 'node', // Establece el entorno de prueba a Node.js
};
*/


module.exports = {
    verbose: true,
    testEnvironment: 'node',
    setupFilesAfterEnv: ['<rootDir>/tests/setupTests.js'],
};
