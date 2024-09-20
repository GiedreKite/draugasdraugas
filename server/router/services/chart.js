import { connection } from '../../db.js';
import express from 'express'

export const chartGetAPIrouter = express.Router();

export const chartPutAPIrouter = express.Router();

chartGetAPIrouter.get('/', getchart);

chartPutAPIrouter.put('/', putUpdatechart);

async function getchart(req, res) {
    const sql = 'SELECT id, name, price, user_id, FROM chart;';
    const [dataFromServer,fields] = await connection.execute(sql);



    return res.json({
        status: 'success',
        data: dataFromServer,
    });
}

async function putUpdatechart(req, res) {
    if (typeof req.body !== 'object'
        || Array.isArray(req.body)
        || req.body === null
    ) {
        return res.json({
            status: 'error',
            data: 'Pagrindinis duomenu tipas turi buti objektas',
        });
    }
    const {id, name, price, user_id } = req.body;

    const sql = 'UPDATE chart SET  id = ?,  name = ?, price = ?, user_id = ?, WHERE id=?;';
    const [dataFromServer,fields] = await connection.execute(sql,[id, name, price, user_id]);

// klaidos pranesimas jei nesekminga ar pakeista daugiau maziau  eilute


    return res.json({
        status: 'success',
        data: dataFromServer,
    });
}
