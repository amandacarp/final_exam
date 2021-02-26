import * as React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IBook } from '../../common/types';
import apiService from '../utils/api-service';

const Post = (props: PostProps) => {

    const [books, setBooks] = useState<IBook>(null);
    const [title, setTitle] = useState(null);
    const [author, setAuthor] = useState(null);
    const [price, setPrice] = useState(null);
    const [categoryid, setCategoryid] = useState('');
    const history = useHistory();

    useEffect(() => {
        apiService(`/api/books`)
            .then(books => setBooks(books))
    }, []);


    const PostBook = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        apiService(`/api/books`, 'POST', { title, author, price, categoryid })
        history.push(`/books`)
    }


    return (
        <>
            <h1 className="text-center m-4">Post Book</h1>
            <div className="container">
                <div className="row d-flex justify-content-center">
            <div className="col-md-6">
                    <div className="form-group m-3">
                        <label> Title</label>
                        <input className="form-control" onChange={e => setTitle(e.target.value)} />

                        <label> Author</label>
                        <input className="form-control" onChange={e => setAuthor(e.target.value)} />

                        <label> Price</label>
                        <input className="form-control" onChange={e => setPrice(e.target.value)} />

                        <label> Category </label>
                        <div>
                            <select value={categoryid} onChange={e => setCategoryid(e.target.value)}>
                                <option value='0'>Select a Category...</option>
                                {books?.map((book: { id: number; categoryid: number; name: string; }) => (
                                    <option key={`key-${book.id}`} value={book.categoryid}>{book.name}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <button className="btn btn-primary shadow m-3" onClick={PostBook}>Save Post</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

interface PostProps { }

export default Post;