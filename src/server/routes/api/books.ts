import { Router } from 'express';
import * as passport from 'passport';
import db from '../../db';

const router = Router();

router.get('/:id?', async (req, res) => {
    const id = Number(req.params.id)
    try {
        const result = id ? await db.Books.one(id) : await db.Books.all();
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'my code sucks', error: error.message })
    }
})

router.post('/', passport.authenticate('jwt'), async (req, res) => {
    const newBook = req.body
    try {
        const result = await db.Books.insert(newBook)
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'my code sucks', error: error.message })
    }
})

router.put('/:id', passport.authenticate('jwt'), async (req, res) => {
    const id = Number(req.params.id)
    const editedBook = req.body
    try {
        const result = await db.Books.update(editedBook, id)
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'my code sucks', error: error.message })
    }
})


router.delete('/:id', passport.authenticate('jwt'), async (req, res) => {
    const id = Number(req.params.id)
    try {
        const result = await db.Books.destroy(id)
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'my code sucks', error: error.message })
    }
})

export default router;