import express from 'express';

import { servicesAPIrouter } from './services/services.js';
import { userInfoAPIrouter } from './services/userInfo.js';
import { registerAPIrouter } from './register/register.js';
import { serviceAPIrouter } from './services/service.js';
import { singinAPIrouter } from './singin/singin.js';
import { userListAPIrouter } from './services/userList.js';
import { chartGetAPIrouter, chartPutAPIrouter } from './services/chart.js';


export const apiRouter = express.Router();

apiRouter.use('/services', servicesAPIrouter);
apiRouter.use('/service', serviceAPIrouter);
apiRouter.use('/user', userListAPIrouter);
apiRouter.use('/users', userInfoAPIrouter);
apiRouter.use('/register', registerAPIrouter);
apiRouter.use('/singin', singinAPIrouter);
apiRouter.use('/chart', chartGetAPIrouter);
apiRouter.use('/services', chartPutAPIrouter);


apiRouter.all('/', (req, res) => {
    return res.json({
        status: 'error',
        msg: 'Issirink konkretu API endpointa',
    });
});