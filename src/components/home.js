import React, {useState, useEffect} from 'react';
import ProblemList from './ProblemList';
import axios from 'axios';

const Home = (props) => {
    const [problems, setProblems] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/problems")
            .then(res => setProblems(res.data)); 
    },[])
    
    return (
        <div className='tc'>
        <h1>Problems</h1>
        <ProblemList problems={problems}/>
        </div>
    )
}

export default Home;
