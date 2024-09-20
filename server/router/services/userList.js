import { connection } from '../../db.js';
import express from 'express'

export const userListAPIrouter = express.Router();

userListAPIrouter.get('/', getuserInfo);

userListAPIrouter.put('/', putUpdateUserInfo);

async function getuserInfo(req, res) {
    const sql = 'SELECT * FROM users;';
    const [dataFromServer,fields] = await connection.execute(sql);



    return res.json({
        status: 'success',
        data: dataFromServer,
    });
}

async function putUpdateUserInfo(req, res) {
    const sql = 'UPDATE users SET name = ?, username = ?, phone = ?,surname = ?,mail = ?,state = ?, password = ? WHERE id=1;';
    const [dataFromServer,fields] = await connection.execute(sql,[name, username, phone,surname,mail,state, password, id]);

// klaidos pranesimas jei nesekminga ar pakeista daugiau maziau  eilute


    return res.json({
        status: 'success',
        data: dataFromServer,
    });
}
