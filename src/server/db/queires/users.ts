import { Query } from '../';
import {IUser, MySQLResponse} from '../../../common/types';

const all = () => Query<IUser[]>('SELECT * FROM Users');
const one = (id: IUser['id']) => Query<IUser>('SELECT * FROM Users WHERE id = ?', [id]);
const insert = (newUser: IUser) => Query<MySQLResponse>('INSERT INTO Users SET ?', [newUser]);
const find = (column: string, value: string | number) => Query('SELECT * FROM Users WHERE ?? = ?', [column, value])


export default {
    all,
    one,
    insert,
    find
}