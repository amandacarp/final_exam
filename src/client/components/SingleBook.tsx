import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IBook } from '../../common/types';
import apiService from '../utils/api-service';

const SingleBook = (props: SingleBookProps) => {

    const [book, setBook] = useState<IBook>(null);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        apiService(`/api/books/${id}`)
            .then(book => setBook(book[0]))
    }, [id]);

    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5">
                    <h1 className="border-bottom border-primary mt-5 text-center">{book?.title}</h1>
                        <div className="card m-5">
                            <div className="card-header text-center">Title: {book?.title}</div>
                            <div className="card-text text-center">Author: {book?.author}</div>
                            <div className="card-text text-center">Price: ${book?.price}</div>
                            <div className="card-text text-center">Category: {book?.name}</div>
                            <div className="card-footer d-flex justify-content-between">
                                <Link className='btn-sm btn-primary shadow' to={`/edit/${book?.id}`}>Edit Book</Link>
                                <Link className='btn-sm btn-primary shadow' to={`/books`}>Go Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

interface SingleBookProps { }

export default SingleBook;