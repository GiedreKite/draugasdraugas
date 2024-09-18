import express from 'express';

import { servicesAPIrouter } from './services/services.js';
import { userInfoAPIrouter } from './services/userInfo.js';
import { registerAPIrouter } from './register/register.js';
import { serviceAPIrouter } from './services/service.js';


export const apiRouter = express.Router();

apiRouter.use('/services', servicesAPIrouter);
apiRouter.use('/service', serviceAPIrouter);

apiRouter.use('/users', userInfoAPIrouter);
apiRouter.use('/register', registerAPIrouter);


apiRouter.all('/', (req, res) => {
    return res.json({
        status: 'error',
        msg: 'Issirink konkretu API endpointa',
    });
});