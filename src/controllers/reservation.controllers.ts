import { Request, Response } from "express";
import Reservation from '../models/reservation';
import config from '../config/config';

export const reservation = (req: Request, res: Response) => {
    res.send('reservation');
}