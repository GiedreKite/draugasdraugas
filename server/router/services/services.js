import { connection } from '../../db.js';
import express from 'express'

export const servicesAPIrouter = express.Router();

servicesAPIrouter.get('/', getServices);

async function getServices(req, res) {
    const sql = 'SELECT * FROM services;';
    const [dataFromServer,fields] = await connection.execute(sql);

    

    return res.json({
        status: 'success',
        data: dataFromServer,
    });
}