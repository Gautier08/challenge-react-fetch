import React from 'react';

const DisplayQuote = ({ quote }) => {
    return (
        <div className="DisplayQuote">
            <img src={quote.image} alt="" />
            <ul>
                <li>Character : {quote.character}</li>
                <li>
                    Quote : {quote.quote}
                </li>
            </ul>
        </div>
    );
};

export default DisplayQuote;