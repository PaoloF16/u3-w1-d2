import { useEffect, useState } from "react";
import CommentsList from "./CommentsLits";
import AddComment from "./AddComment"

const ApiUrl = "https://striveschool-api.herokuapp.com/api/comments/";
const Token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWUxZTFhYzczOWY4NzAwMTU3YWIwODgiLCJpYXQiOjE3NzY0MTEwNTIsImV4cCI6MTc3NzYyMDY1Mn0.TlevMKTw6sR2qLolKy_AF0czZscRN7wRkVPwPX79Vq4";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`${ApiUrl}${asin}`, {
      headers: {
        Authorization: Token,
      },
    })
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [asin]);

  return (
    <>
       <>
      <CommentsList comments={comments} />
      <AddComment asin={asin} />
    </>
    </>
  );
};

export default CommentArea;
