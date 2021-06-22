import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Gif from '../lib/models/Gif.js';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates a datapoint with a requested gif', async () => {
    const res = await request(app)
      .post('/api/v1/gifs');
      
    expect(res.body).toEqual({ 
      id: expect.any(String),
      url: expect.any(String),
      title: expect.any(String),
      image: expect.any(Object),
    });
  });

  it('receives gifs from table', async () => {
    
    const gif1 = await Gif.insert({
      id: expect.any(String),
      url: expect.any(String),
      title: expect.any(String),
      image: expect.any(Object)
    });

    const gif2 = await Gif.insert({
      id: expect.any(String),
      url: expect.any(String),
      title: expect.any(String),
      image: expect.any(Object)
    });
    
    const res = await request(app)
      .get('/api/v1/gifs');

    expect(res.body).toEqual([gif1, gif2]);
  });

  it('updates a gif from the table', async () => {

    const badGif = await Gif.insert({
      id: expect.any(String),
      url: expect.any(String),
      title: expect.any(String),
      image: expect.any(Object)
    });

    badGif.title = 'Big Chungus';

    const res = await request(app).put(`/api/v1/gifs/${badGif.id}`)
      .send(badGif);
    expect(res.body).toEqual(badGif);
  });
});
