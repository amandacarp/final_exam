import { Router } from 'express';
import {generateHash} from '../../utils/password';
import {signToken} from '../../utils/tokens';
import db from '../../db';

const router = Router();

router.post('/', async (req, res) => {
    const newUser = req.body
    try {
        newUser.password = await generateHash(newUser.password)
        const result = await db.Users.insert(newUser);
        const token = signToken({userid: result.insertId, email: newUser.email})
        res.json(token);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'my code sucks', error: error.message })
    }
})

export default router;