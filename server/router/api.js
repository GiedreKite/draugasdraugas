import express from 'express';

import { servicesAPIrouter } from './services/services.js';
import { userInfoAPIrouter } from './services/userInfo.js';


export const apiRouter = express.Router();

apiRouter.use('/services', servicesAPIrouter);

apiRouter.use('/users', userInfoAPIrouter);

apiRouter.all('/', (req, res) => {
    return res.json({
        status: 'error',
        msg: 'Issirink konkretu API endpointa',
    });
});