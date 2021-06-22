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
    url: 'https://giphy.com/gifs/planet-globe-joe-winograd-HRzhhyrs8n5JFyCTsv',
    title: 'Op Art GIF by Joe Winograd',
    images: {
      'hd': {
        'height': '1400',
        'mp4': 'https://media3.giphy.com/media/HRzhhyrs8n5JFyCTsv/giphy-hd.mp4?cid=e3b0c44280100a5538c01d0a5273334d0c0fb294cc9758dd&rid=giphy-hd.mp4&ct=g',
        'mp4_size': '18317357',
        'width': '1400'
      },
    }
  };
  

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
});
