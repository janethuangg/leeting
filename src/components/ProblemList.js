import React from 'react';
import Problem from './Problem';

const ProblemList = ({problems}) => {
    return (
    <div>
        {
        problems.map((problem, i) => {
        return (
            <Problem
            id={problems[i]._id}
            key={i}
            number={problems[i].number}
            title={problems[i].title}
            difficulty={problems[i].difficulty}
            topics={problems[i].topics}
            notes={problems[i].notes}
            date={problems[i].date}/>
            )})
        }
    </div>
    )
}

export default ProblemList;
