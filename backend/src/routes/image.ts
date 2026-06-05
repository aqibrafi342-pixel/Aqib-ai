import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

router.post('/generate', (req: Request, res: Response) => {
  res.json({ message: 'Image generation - to be implemented' });
});

router.get('/history', (req: Request, res: Response) => {
  res.json({ message: 'Image history - to be implemented' });
});

router.delete('/:id', (req: Request, res: Response) => {
  res.json({ message: 'Delete image - to be implemented' });
});

export = router;
