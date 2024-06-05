   
const path = require('path');
const fs = require('fs');

const { request, response } = require('express');

const db = './db/usuarios.json';

const usuariosGet = (req = request, res = response) => {
    let data = JSON.parse(fs.readFileSync(db, "utf-8"));
    res.send(data);
};

const usuariosJuegoUse = (req = request, res = response, next) => {
    const { usuario } = req.params;
    let { usuarios:users } = JSON.parse(fs.readFileSync(db, "utf-8"));
    if (users.find(user => user === usuario)){
        next();
        return;
    }else{
        res.sendFile(path.join(__dirname, "../public", "who.html"));
    }
};

const usuariosJuegoGet = (req, res) => {
    res.sendFile(path.join(__dirname, "../public", "usuarios.html"));
}

const conejoGet = (req, res) => {
    const { n } = req.params;
    const randomNumber = Math.floor(Math.random() * (5 - 1) + 1);

    if (Number(n) == randomNumber) {
        res.sendFile(path.join(__dirname, "../public", "conejo.html"));
    }else{
        res.sendFile(path.join(__dirname, "../public", "voldemort.html"));
    }
};

module.exports = {
    usuariosGet,
    usuariosJuegoUse,
    usuariosJuegoGet,
    conejoGet
}