import { Router } from 'express';
import Gif from '../models/Gif.js';
import { formatGifs } from '../munge.js';
import { giphyClient } from '../utils/giphy.js';

export default Router()
  .post('/', async (req, res, next) => {
    try {
     
      const response = await giphyClient();
      const gifs = formatGifs(response.data);
      
      res.send(gifs);

    } catch (err) {
      next(err);
    }
  });
