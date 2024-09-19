import { connection } from '../../db.js';
import express from 'express'
import { isValidPassword, isValidUsername } from '../../lib/isValid.js';

export const singinAPIrouter = express.Router();


singinAPIrouter.post('/', postSingin);
singinAPIrouter.get('/', getSingin);

singinAPIrouter.use((req, res) => {
    return res.json({
        status: 'error',
        data: 'Toks HTTP metodas /api/singin nepalaikomas',
    });
});


async function getSingin(req, res) {
    const coockies = req
    .headers
    .cookie
    .split(';')
    .map(s => s.trim().split('='))
    .reduce((total, item) => ({...total, [item[0]]: item[1] }), {})

    console.log(req.headers.cookie)
//     if (typeof req.body !== 'object'
//         || Array.isArray(req.body)
//         || req.body === null
//     ) {
//         return res.json({
//             status: 'error',
//             msg: 'Pagrindinis duomenu tipas turi buti objektas',
//         });
//     }   
return res.json({
            status: 'succsess',
            msg: 'Pavyko',
        });
}

async function postSingin(req, res) {
    if (typeof req.body !== 'object'
        || Array.isArray(req.body)
        || req.body === null
    ) {
        return res.json({
            status: 'error',
            data: 'Pagrindinis duomenu tipas turi buti objektas',
        });
    }

    const requiredFields = ['username', 'password'];

    if (Object.keys(req.body).length !== requiredFields.length) {
        return res.json({
            status: 'error',
            data: `Objekte turi buti tik ${requiredFields.length} raktai: ${requiredFields.join(', ')}`,
        });
    }

    const { username, password } = req.body;

    const usernameError = isValidUsername(username);
    if (usernameError) {
        return res.json({
            status: 'error',
            data: usernameError,
        });
    }

    const passwordError = isValidPassword(password);
    if (passwordError) {
        return res.json({
            status: 'error',
            data: passwordError,
        });
    }


    try {
        const sql = "SELECT id,username,password FROM users WHERE username = '?'";
        const [result,fields] = await connection.execute(sql, [username]);

        if (result.length === 0 || result.length > 1) {
            return res.json({
                status: 'error',
                data: 'Nerastas vartotojas',
            });
        }
        if(result[0].password !== password){
            return res.json({
                status: 'error',
                data: 'Neatitinka prisijungimo duomenys',
            });
        }
    } catch (error) {
        return res.json({
            status: 'error',
            data: 'Del techniniu kliuciu nepavyko ivykdyti registracijos proceso, pabandykite veliau',
        });
    }
    const sql = "SELECT id,name,surname,phone,state,mail,username FROM users WHERE id = '?'";
    const [result,fields] = await connection.execute(sql, [result[0].id]);

    if (result.length === 0 || result.length > 1) {
        return res.json({
            status: 'error',
            data: 'Nerastas vartotojas',
        });
    }


    return res.json({
        status: 'success',
        data: {
            'message':"Prisijungta sėkmingai",
            'data':result[0],
        },
    });
}