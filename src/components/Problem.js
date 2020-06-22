import React from 'react';

const Problem = ({number, title, difficulty, topics, notes, date}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <div>
            <h2> {number} {title} </h2>
            <h5> {difficulty} {date} </h5>
            <h5> {topics} </h5>
            <p> {notes} </p>
        </div>
        </div>
    )
}

export default Problem;
