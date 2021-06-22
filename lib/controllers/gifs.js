import { Router } from 'express';
import Gif from '../models/Gif.js';
import GifService from '../../services/GifService.js';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const gif = await GifService.create(req.body);
      res.send(gif);

    } catch (err) {
      next(err);
    }
  });
