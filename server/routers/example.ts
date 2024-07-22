import { Router, Response, Request } from 'express';

const router = Router();

router.route('/').get((req: Request, res: Response) => {
  return res.send('Hello World!!!!!!!!!');
});

export default router;