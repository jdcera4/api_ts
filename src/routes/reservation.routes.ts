import {Router} from 'express';
import {reservation} from '../controllers/reservation.controllers'

const router = Router();

router.post('/reservation', reservation);

export default router;
