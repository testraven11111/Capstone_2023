const Hapi = require('@hapi/hapi');
const resepRoutes = require('./routes/resepRoutes');
const fs = require('fs');
const path = require('path');

const server = Hapi.server({
    port: 8000,
    host: 'localhost',
});

const init = async () => {
    require('./export');

    server.route({
        method: 'GET',
        path: '/api/resep',
        handler: (request, h) => {
            const resepPath = path.join(__dirname, '../client/src/resep.json');
            const resepData = fs.readFileSync(resepPath, 'utf8');
            const resepJSON = JSON.parse(resepData);
            return resepJSON;
        },
    });

    server.route({
        method: 'GET',
        path: '/api/resep/{id}',
        handler: resepRoutes.getResepById,
    });

    server.route({
        method: 'POST',
        path: '/api/resep',
        handler: resepRoutes.addResep,
    });

    server.route({
        method: 'DELETE',
        path: '/api/resep/{id}',
        handler: resepRoutes.deleteResepById,
    });
};

const startServer = async () => {
    try {
        await init();
        await server.start();
        console.log(`Server berjalan pada ${server.info.uri}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

startServer();