import { connection } from '../../db.js';
import express from 'express'

export const userInfoAPIrouter = express.Router();

userInfoAPIrouter.get('/', getuserInfo);

async function getuserInfo(req, res) {
    const sql = 'SELECT * FROM user;';
    const [dataFromServer,fields] = await connection.execute(sql);

    

    return res.json({
        status: 'success',
        data: dataFromServer,
    });
}