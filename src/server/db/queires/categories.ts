import { Query } from '../';
import {ICategory, MySQLResponse} from '../../../common/types';

const all = () => Query<ICategory[]>('SELECT * FROM Categories');
const one = (id: ICategory['id']) => Query<ICategory>('SELECT * FROM Categories WHERE id = ?', [id]);



export default {
    all,
    one
}