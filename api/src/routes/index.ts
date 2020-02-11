import {Router} from 'express';
const router = Router();

import {getUser, getHome} from '../controllers/user.controller';

//Usuario
router.route('/').get(getHome);
router.route('/user').get(getUser);

export default router;