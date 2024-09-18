import { connection } from '../../db.js';
import express from 'express'
import { isValid } from '../../lib/isValid.js';

export const serviceAPIrouter = express.Router();

serviceAPIrouter.post('/', postservice);

serviceAPIrouter.use((req, res) => {
    return res.json({
        status: 'error',
        data: 'Toks HTTP metodas /api/service nepalaikomas',
    });
});

async function postservice(req, res) {
    if (typeof req.body !== 'object'
        || Array.isArray(req.body)
        || req.body === null
    ) {
        return res.json({
            status: 'error',
            data: 'Pagrindinis duomenu tipas turi buti objektas',
        });
    }

    const requiredFields = ['name', 'about', 'price', 'img'];

    if (Object.keys(req.body).length !== requiredFields.length) {
        return res.json({
            status: 'error',
            data: `Objekte turi buti tik ${requiredFields.length} raktai: ${requiredFields.join(', ')}`,
        });
    }

    const { name, about, price, img } = req.body;


    const nameError = isValid(name);
    if (nameError !== '') {
        return res.json({
            status: 'error',
            data: nameError,
        });
    } 

    const aboutError = isValid(about);
    if (aboutError !== '') {
        return res.json({
            status: 'error',
            data: aboutError,
        });
    }
    const priceError = isValid(price);
    if (priceError !== '') {
        return res.json({
            status: 'error',
            data: priceError,
        });
    }
    const imgError = isValid(img);
    if (imgError !== '') {
        return res.json({
            status: 'error',
            data: imgError,
        });
    }


 


    try {
        const sql = 'INSERT INTO users (name, about, price, img) VALUES (?, ?, ?, ?);';
        const result = await connection.execute(sql, [name, about, price, img ]);

        if (result[0].affectedRows !== 1) {
            return res.json({
                status: 'error',
                data: 'Uzregistruoti nepavyko, nes toks vartotojas jau yra',
            });
        }
    } catch (error) {
        return res.json({
            status: 'error',
            data: 'Del techniniu kliuciu nepavyko ivykdyti registracijos proceso, pabandykite veliau',
        });
    }

    return res.json({
        status: 'success',
        data: 'Registracija buvo sekminga',
    });
}