import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Gif from '../lib/models/Gif.js';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  const gif = {
    url: 'https://giphy.com/gifs/cat-smoke-smoking-3o6Zt481isNVuQI1l6',
    title: 'Cat Smoking GIF by sheepfilms',
    images: {
      'original': {
        'height': '250',
        'width': '400',
        'size': '3662773',
        'url': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=giphy.gif&ct=g',
        'mp4_size': '772242',
        'mp4': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.mp4?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=giphy.mp4&ct=g',
        'webp_size': '992406',
        'webp': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.webp?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=giphy.webp&ct=g',
        'frames': '81',
        'hash': '23c2bbc1d41e1376b8252ef4a6505bb2'
      }
    }
  };

  it('creates a datapoint with a requested gif', async () => {
    const res = await request(app)
      .post('/api/v1/gifs')
      .send(gif);

    expect(res.body).toEqual({ 
      id: expect.any(Number),
      url: 'https://giphy.com/gifs/cat-smoke-smoking-3o6Zt481isNVuQI1l6',
      title: 'Cat Smoking GIF by sheepfilms',
      images: {
        'original': {
          'height': '250',
          'width': '400',
          'size': '3662773',
          'url': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=giphy.gif&ct=g',
          'mp4_size': '772242',
          'mp4': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.mp4?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=giphy.mp4&ct=g',
          'webp_size': '992406',
          'webp': 'https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.webp?cid=3f0609denlj9k1dmp3eudnl4h1pppz7svvmftuvikjldjdhf&rid=giphy.webp&ct=g',
          'frames': '81',
          'hash': '23c2bbc1d41e1376b8252ef4a6505bb2'
        },
      }
    });
  });
});
