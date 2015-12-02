import { Router } from 'express';
import redis from 'redis';

const router = new Router();

router.post('/', (req, res, next) => {
  try {
    const movie_id = req.query.movie_id;
    var client = redis.createClient();
    client.set(movie_id, "yes", redis.print);
    res.status(200).send('OK');
  } catch (err) {
    next(err);
  }
});

router.get('/', async (req, res, next) => {
  try {
    var client = redis.createClient();
    client.keys("*", function(err, reply) {
      // reply is null when the key is missing
      res.status(200).send(reply);
    });
  } catch (err) {
    next(err);
  }
});

export default router;

