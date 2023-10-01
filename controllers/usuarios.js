const { response } = require('express');

const usuariosGet = (red,res) =>{

    const { q,nombre = "Lui",apikey,page,limit } = red.query;

    res.json({
        msg:'get API - Controller',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPut = (red,res) => {

    const { id } = red.params;

    res.json({ 
        msg:'put API - Controller',
        id
    });
}

const usuariosPost = (red,res) => {

    const { nombre, apellidos ,edad  } = red.body;

    res.json({
        msg:'post API - Controller',
        nombre,
        apellidos,
        edad,
    })
}

const usuariosDelete = (red,res) => {
    res.json({
        msg:'delete API - Controller'
    })
}

const usuariosPath = (red,res) => {
    res.json({
        msg:'patch API - Controller'
    })
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPath
}