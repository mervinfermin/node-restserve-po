const express = require('express');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuario');


const app = express();

app.post('/login', (req, res) => {

    let body = req.body;

    Usuario.findOne({ email: body.email }, (err, usuarioDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: '(Usuario) o contrasea incorrectos'

                }
            });

        }

        if (!bcrypt.compareSync(body.password, usuarioDB.password)) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario o (contrasea) no es correctos'

                }
            });

        }
        // aqui agregamos el token
        let token = jwt.sign({
            usuario: usuarioDB
                //},'este-es-el-seed-desarrollo', { expiresIn: 60*60*24*30 });
        }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });

        res.json({
            OK: true,
            Usuario: usuarioDB,
            token
        });

    });

});

module.exports = app;