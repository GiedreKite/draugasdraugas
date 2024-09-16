import { connection } from '../../db.js';
import express from 'express'

export const servicesAPIrouter = express.Router();

servicesAPIrouter.get('/', getServices);

async function getServices(req, res) {
    const sql = 'SELECT * FROM services;';
    let dataFromServer = null;

    try {
        dataFromServer = await connection.execute(sql);
    } catch (error) {
        dataFromServer = [[]];
    }

    return res.json({
        status: 'success',
        data: dataFromServer[0],
    });
}
