import { connection } from '../../db.js';
import express from 'express'
import { nameCheck } from '../../lib/nameCheck.js';
import { surnameCheck } from '../../lib/surnameCheck.js';
import { passCheck } from '../../lib/passCheck.js';
import { phoneCheck } from '../../lib/phoneCheck.js';
import { mailCheck } from '../../lib/mailCheck.js';
import { usernameCheck } from '../../lib/usernameCheck.js';

export const registerAPIrouter = express.Router();

registerAPIrouter.post('/', postRegister);

registerAPIrouter.use((req, res) => {
    return res.json({
        status: 'error',
        data: 'Toks HTTP metodas /api/register nepalaikomas',
    });
});

async function postRegister(req, res) {
    if (typeof req.body !== 'object'
        || Array.isArray(req.body)
        || req.body === null
    ) {
        return res.json({
            status: 'error',
            data: 'Pagrindinis duomenu tipas turi buti objektas',
        });
    }

    const requiredFields = ['username', 'password', 'name', 'surname', 'phone', 'mail'];

    if (Object.keys(req.body).length !== requiredFields.length) {
        return res.json({
            status: 'error',
            data: `Objekte turi buti tik ${requiredFields.length} raktai: ${requiredFields.join(', ')}`,
        });
    }

    const { username, password, name, surname, phone, mail } = req.body;

    const usernameError = usernameCheck(username);
    if (usernameError !== '') {
        return res.json({
            status: 'error',
            data: usernameError,
        });
    } 
    const nameError = nameCheck(name);
    if (nameError !== '') {
        return res.json({
            status: 'error',
            data: nameError,
        });
    } 
    if (name === surname) {
        errordata = 'Vardas ir pavardė negali sutapti';}

    const surnameError = surnameCheck(surname);
    if (surnameError !== '') {
        return res.json({
            status: 'error',
            data: surnameError,
        });
    }
    const mailError = mailCheck(mail);
    if (mailError !== '') {
        return res.json({
            status: 'error',
            data: mailError,
        });
    }
    const passError = passCheck(password);
    if (passError !== '') {
        return res.json({
            status: 'error',
            data: passError,
        });
    }
    const phoneError = phoneCheck(phone);
    if (phoneError !== '') {
        return res.json({
            status: 'error',
            data: phoneError,
        });
    }

 


    try {
        const sql = 'INSERT INTO users (username, name, surname, phone, mail, password) VALUES (?, ?, ?, ?, ?, ?);';
        const result = await connection.execute(sql, [username, name, surname, phone, mail, password]);

        if (result[0].affectedRows !== 1) {
            return res.json({
                status: 'error',
                data: 'Uzregistruoti nepavyko, nes toks vartotojas jau yra',
            });
        }
    } catch (error) {
        console.log(error)
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