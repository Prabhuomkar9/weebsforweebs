import { NextApiRequest, NextApiResponse } from 'next';
import  User  from '@/pages/api/(models)/User';

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Fetch all users from the database
        const users = await User.find();

        // Send the fetched users as a JSON response
        res.status(200).json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export async function POST(req:NextApiRequest,res:NextApiResponse){
    try{
        const body = await req.body;
        const userData=body.formData;
        await User.create(userData);
        
        res.status(200).json({ message: "Ticket created"});

    }
    catch(err){
        res.status(500).json({message:"Error",err})
    }
}