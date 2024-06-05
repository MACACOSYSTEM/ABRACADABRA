const { Router } = require('express');
const router = Router();

const { usuariosGet, usuariosJuegoGet, conejoGet, usuariosJuegoUse } = require('../controllers/abracadabra.controller');

router.get('/usuarios', usuariosGet);
router.get('/juego/:usuario', usuariosJuegoUse, usuariosJuegoGet);
router.get('/conejo/:n', conejoGet);

module.exports = router;