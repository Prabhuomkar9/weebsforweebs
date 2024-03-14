import { NextApiRequest, NextApiResponse } from 'next';

export default function GET(req, res) {
      res.status(200).json({ message: 'This is a GET request response' });
  }
  