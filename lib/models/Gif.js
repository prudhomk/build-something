import pool from '../utils/pool.js';

export default class Gif {
    id;
    url;
    title;
    image;

    constructor(row) {
      this.id = row.id;
      this.url = row.url;
      this.title = row.title;
      this.image = row.image;
    }

    static async insert({ url, title, image }) {
      const { rows } = await pool.query(
        `INSERT INTO gifs (url, title, image)
        VALUES ($1, $2, $3)
        RETURNING *`,
        [url, title, image]
      );

      return new Gif(rows[0]);
    }

    static async findAll() {
      const { rows } = await pool.query('SELECT * FROM gifs');

      return rows.map(row => new Gif(row));
    }

    static async findById(id) {
      const { rows } = await pool.query('SELECT * FROM gifs WHERE id=$1', [id]);

      return new Gif(rows[0]);
    }

    static async update({ url, title, image, id }) {
      const { rows } = await pool.query(
        `UPDATE gifs
          SET url = $1,
              title = $2,
              image = $3
          WHERE id = $4
          RETURNING *`,
        [url, title, image, id]
      );
      return new Gif(rows[0]);
    }

    static async delete(id) {
      const { rows } = await pool.query(
        `DELETE FROM gifs
        WHERE id = $1
        RETURNINg *`,
        [id]
      );
      return new Gif(rows[0]);
    }

}
