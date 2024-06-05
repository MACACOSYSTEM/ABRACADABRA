const express = require('express');
const path = require('path');
const { usuariosJuegoUse } = require('../controllers/abracadabra.controller');
require('dotenv').config();

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usuariosPath = '/abracadabra';
        this.middlewares();
        this.routes()
    }
    middlewares(){
    // Directorio publico.
    this.app.use( express.static('public') );
    }
    routes(){
        this.app.use(this.usuariosPath, require('../routes/abracadabra.routes'));
        this.app.get("*", (req, res) => {
            res.sendFile(path.join(__dirname, "../public", "404.html"));
        });
    }
    listen(){
        this.app.listen(this.port, () => console.log(`Server up and running at ${this.port}`));
    }
};
module.exports = Server;