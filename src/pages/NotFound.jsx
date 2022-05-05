import React from 'react';
import '../styles/NotFound.scss';

const NotFound = () => {
    return (
        <div className='NotFound'>
            <h1 className='title'><span className='ups'>Ups..</span> <br />Parece que encontraste un error</h1>
            <div className='animation'>
                <div class="ball"></div>
                <div class="shadow"></div>
            </div>
        </div>
    );
}

export default NotFound;