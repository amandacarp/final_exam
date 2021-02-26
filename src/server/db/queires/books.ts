import { Query } from '../';
import {IBook, MySQLResponse} from '../../../common/types';

const all = () => Query<IBook[]>('SELECT Books.*, Categories.name FROM Books JOIN Categories ON Categories.id = Books.categoryid');
const one = (id: IBook['id']) => Query<IBook>('SELECT Books.*, Categories.name FROM Books JOIN Categories ON Categories.id = Books.categoryid WHERE Books.id = ?', [id]);
const insert = (newBook: IBook) => Query<MySQLResponse>('INSERT INTO Books SET ?', [newBook]);
const update = (editedBook: IBook, id: IBook['id']) => Query<MySQLResponse>('UPDATE Books SET ? WHERE id = ?', [editedBook, id]);
const destroy = (id: IBook['id']) => Query<MySQLResponse>('DELETE FROM Books WHERE id = ?', [id]);


export default {
    all,
    one,
    insert,
    update,
    destroy
}