import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {IBook} from '../../common/types';
import apiService from '../utils/api-service';

const Books = (props: BooksProps) => {    

    const [books, setBooks] = useState<IBook[]>(null);

    useEffect(() => {
        apiService('/api/books')
        .then(books => setBooks(books))
    }, []);

    return (
            <>
            <h1 className="text-center">Books</h1>
            {books?.map(book => (
                <div key={book?.id} className="card m-3">
                    <div className="card-header">Title: {book?.title}</div>
                    <div className="card-text">Author: {book?.author}</div>
                    <div className="card-text">Price: ${book?.price}</div>
                    <div className="card-text">Category: {book?.name}</div>
                    <div className="card-footer">
                        <Link className="btn btn-primary shadow" to={`/book/${book?.id}`}>View Book</Link>
                    </div>
                </div>
            ))}
            </>
    );
}

interface BooksProps {}

export default Books;