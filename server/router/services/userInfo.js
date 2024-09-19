import { connection } from '../../db.js';
import express from 'express'

export const userInfoAPIrouter = express.Router();

userInfoAPIrouter.get('/', getuserInfo);

userInfoAPIrouter.put('/', putUpdateUserInfo);

async function getuserInfo(req, res) {
    const sql = 'SELECT username, name, surname, state, phone, mail,password, id FROM users;';
    const [dataFromServer,fields] = await connection.execute(sql);



    return res.json({
        status: 'success',
        data: dataFromServer,
    });
}

async function putUpdateUserInfo(req, res) {
    if (typeof req.body !== 'object'
        || Array.isArray(req.body)
        || req.body === null
    ) {
        return res.json({
            status: 'error',
            data: 'Pagrindinis duomenu tipas turi buti objektas',
        });
    }
    const {name, username, phone,surname,mail,state, password, id } = req.body;

    const sql = 'UPDATE users SET name = ?, username = ?, phone = ?,surname = ?,mail = ?,state = ?, password = ? WHERE id=?;';
    const [dataFromServer,fields] = await connection.execute(sql,[name, username, phone,surname,mail,state, password, id]);

// klaidos pranesimas jei nesekminga ar pakeista daugiau maziau  eilute


    return res.json({
        status: 'success',
        data: dataFromServer,
    });
}
