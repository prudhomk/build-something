import { giphyClient } from '../lib/utils/giphy.js';
import Gif from '../lib/models/Gif.js';

export default class GifService {
  static async create() {
    const data = giphyClient();
    const gif = await Gif.insert(data.url, data.title, data.image);
    return gif;
  }
}

