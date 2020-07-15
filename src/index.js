// importa express
const express = require('express');
// solicita do express o serviço server
const server = express();
// injeta no server - api vai entender que recebe e deve devolver json
server.use(express.json());


// MOSTRAR PARA API COMO CHEGAR NAS ROUTES
// importa as routes - taskroutes
const TaskRoutes = require('./routes/TaskRoutes');
// injeta o arquivo routes no server
server.use('/task', TaskRoutes);

server.listen(3000, () => {
    console.log("API ONLINE");
});