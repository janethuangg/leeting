import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import { Form, Button, Col } from 'react-bootstrap';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

export const LogProblem = () => {
    const [title, setTitle] = useState("")
    const [number, setNumber] = useState(0)
    const [difficulty, setDifficulty] = useState("")
    const [topics, setTopics] = useState([])
    const [notes, setNotes] = useState("")
    const [date, setDate] = useState("")
    const [validated, setValidated] = useState(false);

    const onChangeTitle = event => {
      setTitle(event.target.value)
    }

    const onChangeNumber = event => {
      setNumber(event.target.value)
    }

    const onChangeDifficulty = event => {
      setDifficulty(event.target.value)
    }

    const onChangeTopics = event => {
      console.log(event.target.value)
      setTopics(event.target.value)
    }

    const onChangeDate = date => {
      setDate(date)
    }

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }

      setValidated(true);

      const problem = {
        title: title,
        number: number,
        difficulty: difficulty,
        topics: topics,
        notes: notes,
        date: "2020-06-21"
      };

      axios.post("http://localhost:5000/problems/add", problem)
        .then(res => console.log(res.data)); 
      
        // window.location = '/';
    };
  
    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="2" controlId="formGridNumber">
            <Form.Label>Number</Form.Label>
            <Form.Control type="number" placeholder="No." onChange={onChangeNumber} required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" onChange={onChangeTitle} required/>
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridDifficulty">
            <Form.Label>Difficulty</Form.Label>
            <Form.Control required as="select" defaultValue="Choose..." onChange={onChangeDifficulty}>
              <option>Choose...</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </Form.Control>
        </Form.Group>

        <Form.Group controlId="formGridTopics">
          <Form.Label>Topics</Form.Label>
          <Form.Control as="select" multiple onChange={onChangeTopics}>
            <option>Arrays</option>
            <option>HashTables</option>
            <option>Dynamic Programming</option>
            <option>Strings</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formGridDate">
          <Form.Label>Date &nbsp;</Form.Label>
          <DatePicker onChange={onChangeDate} selected={new Date()}/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
}

export default LogProblem;
  