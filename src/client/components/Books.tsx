import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IBook } from '../../common/types';
import apiService from '../utils/api-service';

const Books = (props: BooksProps) => {

    const [books, setBooks] = useState<IBook[]>(null);

    useEffect(() => {
        apiService('/api/books')
            .then(books => setBooks(books))
    }, []);

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">   
                <div className="col-md-4">
                    <h1 className="border-bottom border-primary mt-5 text-center">Books</h1>
                    </div>
                </div>
                <div className="row justify-content-center mt-5">
                    {books?.map(book => (
                        <div key={book?.id} className="col-md-4">
                            <div className="card m-3">
                                <div className="card-header text-center">Title: {book?.title}</div>
                                <div className="card-text text-center">Author: {book?.author}</div>
                                <div className="card-text text-center">Price: ${book?.price}</div>
                                <div className="card-text text-center">Category: {book?.name}</div>
                                <div className="card-footer d-flex justify-content-center">
                                    <Link className="btn btn-primary shadow" to={`/book/${book?.id}`}>View Book</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}

interface BooksProps { }

export default Books;