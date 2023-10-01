const { Router } = require('express');
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete, usuariosPath } = require('../controllers/usuarios');

const routes = Router();

routes.get('/', usuariosGet)


routes.put('/:id', usuariosPut)


routes.post('/', usuariosPost)


routes.delete('/', usuariosDelete)


routes.patch('/', usuariosPath)


module.exports = routes;