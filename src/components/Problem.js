import React from "react";
import { Badge, Button } from "react-bootstrap";
import "tachyons";

const Problem = ({
  id,
  number,
  title,
  difficulty,
  topics,
  notes,
  date,
  handleDelete,
}) => {
  return (
    <div id={id} className="tc dib br2 pa4 ma2 grow shadow-1">
      <div>
        <div className="tc f4 lh-title">
          {" "}
          {number} {title}{" "}
        </div>
        <Badge
          pill
          variant={
            difficulty.toLowerCase() === "easy"
              ? "success"
              : difficulty.toLowerCase() === "medium"
              ? "warning"
              : "danger"
          }
        >
          {difficulty}
        </Badge>
        <h5> {date.slice(0, 10)} </h5>
        <h5> {topics} </h5>
        <p> {notes} </p>
        <Button onClick={() => handleDelete({ id })}>X</Button>
      </div>
    </div>
  );
};

export default Problem;
