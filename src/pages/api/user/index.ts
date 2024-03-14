import { NextApiRequest, NextApiResponse } from 'next';
import { UserS } from '@/pages/api/(models)/User';

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Fetch all users from the database
        const users = await UserS.find();

        // Send the fetched users as a JSON response
        res.status(200).json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
