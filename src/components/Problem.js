import React from "react";
import { Badge, Button } from "react-bootstrap";
import "tachyons";

const Problem = ({id, number, title, difficulty, topics, notes, date, handleDelete}) => {
    const formattedDate = date.slice(5,7) + '/' + date.slice(8,10) + '/' + date.slice(2,4)
    return (
        <div id={id} className='card'>
            <p className='card-title'> {number} {title} </p>
            <p className='card-date'>{formattedDate}
            <Badge
            pill
            variant={
            difficulty.toLowerCase() === "easy"
              ? "success"
              : difficulty.toLowerCase() === "medium"
              ? "warning"
              : "danger"
            }
            >{difficulty}
            </Badge>
            </p> 
            <p> {topics.join(', ')} </p>
            <p> {notes} </p>
            <Button className='card-button' onClick={ () => handleDelete({id}) }>x</Button>
        </div>
    )}
export default Problem;
