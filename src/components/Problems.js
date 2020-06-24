import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Problem from './Problem';

const Problems = (props) => {
    const [problems, setProblems] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/problems")
            .then(res => setProblems(res.data)); 
    },[])

    const handleDelete = id => {
        axios.delete(`http://localhost:5000/problems/${id.id}`)
        .then(
            setProblems(prev => prev.filter(problem => problem._id !== id.id)) 
        );
    }

    return (
        <div className='tc'>
        <h1>Problems</h1>
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
            date={problems[i].date}
            handleDelete={handleDelete}/>
            )})
        }
    </div>
        </div>
    )
}

export default Problems;
