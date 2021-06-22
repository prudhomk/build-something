import pool from '../utils/pool.js';

export default class Gif {
    id;
    url;
    image;

    constructor(row) {
      this.id = row.id;
      this.url = row.url;
      this.image = row.image;
    }

    static async insert({ url, image }) {
      const { rows } = await pool.query(
        `INSERT INTO gifs (url, image)
        VALUES ($1, $2)
        RETURNING *`,
        [url, image]
      );

      return new Gif(rows[0]);
    }

}
