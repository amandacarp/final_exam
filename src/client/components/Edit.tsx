import * as React from 'react';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { IBook } from '../../common/types';
import apiService from '../utils/api-service';

const Edit = (props: EditProps) => {

    const [book, setBook] = useState<IBook>(null);
    const [books, setBooks] = useState<IBook[]>(null);
    const [title, setTitle] = useState(null);
    const [author, setAuthor] = useState(null);
    const [price, setPrice] = useState(null);
    const [categoryid, setCategoryid] = useState('');
    const { id } = useParams<{ id: string }>();
    const history = useHistory();


    useEffect(() => {
        apiService(`/api/books/${id}`)
            .then(book => setBook(book[0]))
    }, [id]);

    useEffect(() => {
        apiService(`/api/books`)
            .then(books => setBooks(books))
    }, []);

    const editBook = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        apiService(`/api/books/${id}`, 'PUT', { title, author, price, categoryid })
        history.push(`/book/${id}`)
    }

    const deleteBook = (e: React.MouseEvent<HTMLButtonElement>) => {
        apiService(`/api/books/${id}`, 'DELETE')
        history.push(`/books`)
    }

    return (
        <>
            <h1 className="text-center m-4">Edit Book</h1>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <div className="form-group m-3">
                            <label>Edit Title</label>
                            <input defaultValue={book?.title} className="form-control" onChange={e => setTitle(e.target.value)} />

                            <label>Edit Author</label>
                            <input defaultValue={book?.author} className="form-control" onChange={e => setAuthor(e.target.value)} />

                            <label>Edit Price</label>
                            <input defaultValue={book?.price} className="form-control" onChange={e => setPrice(e.target.value)} />

                            <label>Edit Category </label>
                            <div>
                                <select value={categoryid} onChange={e => setCategoryid(e.target.value)}>
                                    <option value='0'>Current: {book?.name}</option>
                                    {books?.map(book => (
                                        <option key={`key-${book.id}`} value={book.categoryid}>{book.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <button className="btn btn-primary shadow m-3" onClick={editBook}>Save Edit</button>
                                <button className="btn btn-primary shadow m-3" onClick={deleteBook}>Delete Book</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

interface EditProps { }

export default Edit;