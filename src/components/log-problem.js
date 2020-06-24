import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { Form, Button, Col } from "react-bootstrap";
import axios from "axios";
import MyEditor from "./Editor";
import { Multiselect } from "multiselect-react-dropdown";
import firebase from "../firebase.js";

const options = [
  { name: "Arrays", id: 1 },
  { name: "HashTables", id: 2 },
  { name: "Strings", id: 3 },
];

export const LogProblem = () => {
  const [title, setTitle] = useState("");
  const [number, setNumber] = useState(0);
  const [difficulty, setDifficulty] = useState("");
  const [topics, setTopics] = useState([]);
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState(new Date());
  const [validated, setValidated] = useState(false);
  const [user, setUser] = useState({});

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeNumber = (event) => {
    setNumber(event.target.value);
  };

  const onChangeDifficulty = (event) => {
    setDifficulty(event.target.value);
  };

  const onChangeTopics = (event) => {
    const currTopics = event.map((item) => item.name);
    setTopics(currTopics);
  };

  const onChangeDate = (date) => {
    setDate(date);
  };

  const onChangeNotes = (notes) => {
    setNotes(notes.editorState.getCurrentContent().getPlainText("/u0001"));
  };

  useEffect(() => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      setUser(currentUser);
    }
  });

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
      date: date,
      user_id: user.uid,
    };

    axios
      .post("http://localhost:5000/problems/add", problem)
      .then((res) => console.log(res.data));

    // window.location = '/';
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="2" controlId="formGridNumber">
          <Form.Label>Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="No."
            onChange={onChangeNumber}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            onChange={onChangeTitle}
            required
          />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridDifficulty">
        <Form.Label>Difficulty</Form.Label>
        <Form.Control
          required
          as="select"
          defaultValue="Choose..."
          onChange={onChangeDifficulty}
        >
          <option>Choose...</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formGridTopics">
        <Form.Label>Topics (doesn't quite work)</Form.Label>
        <Multiselect
          options={options} // Options to display in the dropdown
          onSelect={onChangeTopics} // Function will trigger on select event
          onRemove={onChangeTopics} // Function will trigger on remove event
          displayValue="name" // Property name to display in the dropdown options
        />
      </Form.Group>

      <Form.Group controlId="formGridDate">
        <Form.Label>Date &nbsp;</Form.Label>
        <DatePicker onChange={onChangeDate} selected={date} />
      </Form.Group>

      <Form.Group controlId="formGridNotes">
        <Form.Label>Notes (don't know how to store)</Form.Label>
        <MyEditor handleChange={onChangeNotes} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LogProblem;
