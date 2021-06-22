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
  })

  .get('/', async (req, res, next) => {
    try {
      const gifs = await Gif.findAll();
      res.send(gifs);

    } catch (err) {
      next(err);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const gifs = await Gif.findById(req.params.id);
      res.send(gifs);

    }catch (err) {
      next(err);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {
      const gifs = await Gif.update(req.body, req.params.id);
      res.send(gifs);

    } catch (err) {
      next(err);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try { 
      const gifs = await Gif.delete(req.params.id);
      res.send(gifs);

    } catch (err) {
      next(err);
    }
  });
