import { Router } from 'express';
import redis from 'redis';

const router = new Router();

router.get('/', async (req, res, next) => {
  try {
    var client = redis.createClient();
    client.set("string key", "string val", redis.print);
    client.get("string key", function(err, reply) {
      // reply is null when the key is missing
      res.status(200).send(reply);
    });
  } catch (err) {
    next(err);
  }
});

export default router;

