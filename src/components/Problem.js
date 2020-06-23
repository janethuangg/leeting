import React from 'react';
import {Badge} from 'react-bootstrap'
import 'tachyons';

const Problem = ({number, title, difficulty, topics, notes, date}) => {

    return (
        <div className='tc dib br2 pa4 ma2 grow shadow-1'>
        <div>
            <div className='tc f4 lh-title'> {number} {title} </div>
            <Badge pill variant="success">
                {difficulty}
            </Badge>
            <h5> {date.slice(0,10)} </h5>
            <h5> {topics} </h5>
            <p> {notes} </p>
        </div>
        </div>
    )
}

export default Problem;
