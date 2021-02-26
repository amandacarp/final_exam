import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IBook } from '../../common/types';
import apiService from '../utils/api-service';

const SingleBook = (props: SingleBookProps) => {    

    const [book, setBook] = useState<IBook>(null);
    const {id} = useParams<{id: string}>();

    useEffect(() => {
        apiService(`/api/books/${id}`)
        .then(book => setBook(book[0]))
    }, [id]);

    return (
            <>
            <h1 className="text-center m-4">{book?.title}</h1>
            <div className="card">
                <div className="card-header">Title: {book?.title}</div>
                <div className="card-text">Author: {book?.author}</div>
                <div className="card-text">Price: ${book?.price}</div>
                <div className="card-text">Category: {book?.name}</div>
                <div>
                <Link className='btn btn-primary shadow m-3' to={`/${book?.id}/edit`}>Edit Book</Link>
                <Link className='btn btn-primary shadow m-3' to={`/books`}>Go Back</Link>
                </div>
            </div>
            </>
    );
}

interface SingleBookProps {}

export default SingleBook;