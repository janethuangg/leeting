import React from 'react';
import ProblemList from './ProblemList';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            problems: [
                {
                    number: 1,
                    title: "two sum",
                    difficulty: "easy",
                    topics: "two pointer",
                    notes: "asdf asdf asdf asdf a;alskdfja;sldk asdf;lkajsad;lkfa asdfasdfasdfafasdasfdasasfdasasdfasdfasfasdfasdfasasdfasdfasdasdfasdfasdfasdfasdasdfasdfffd",
                    date: "1/2/2020"
                },

                {
                    number: 1,
                    title: "two sum",
                    difficulty: "easy",
                    topics: "two pointer",
                    notes: "gg",
                    date: "1/2/2020"
                }
            ]
        }
    }

    render() {
        return (
            <div className='tc'>
            <h1>Problems </h1>
            <ProblemList problems={this.state.problems}/>
            </div>
        )
    }
}

export default Home;
