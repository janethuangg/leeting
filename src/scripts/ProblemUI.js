import axios from 'axios';

export function deleteProblem(id) {
    // delete from database
    const problemId = id.id;
    axios.delete(`http://localhost:5000/problems/${problemId}`)
        .then(res => res.data);
    window.location.reload();
}
