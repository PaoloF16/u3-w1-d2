import { useEffect, useState } from "react";
import { FloatingLabel, Form, ListGroup } from "react-bootstrap";

const ApiUrl = "https://striveschool-api.herokuapp.com/api/comments/";
const Token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWUxZTFhYzczOWY4NzAwMTU3YWIwODgiLCJpYXQiOjE3NzY0MTEwNTIsImV4cCI6MTc3NzYyMDY1Mn0.TlevMKTw6sR2qLolKy_AF0czZscRN7wRkVPwPX79Vq4";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`${ApiUrl}${asin}`, {
      headers: {
        Authorization: Token,asdsaddad
      },
    })
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [asin]);

  return (
    <>
      <ListGroup>
        {comments.map((c) => (
          <ListGroup.Item key={c._id}>{c.comment}</ListGroup.Item>
        ))}
      </ListGroup>

      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "100px" }}
        />
      </FloatingLabel>
    </>
  );
};

export default CommentArea;
