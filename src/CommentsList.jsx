import { ListGroup, Button } from "react-bootstrap";
const ApiUrl = "https://striveschool-api.herokuapp.com/api/comments/";
const Token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWUxZTFhYzczOWY4NzAwMTU3YWIwODgiLCJpYXQiOjE3NzY0MTEwNTIsImV4cCI6MTc3NzYyMDY1Mn0.TlevMKTw6sR2qLolKy_AF0czZscRN7wRkVPwPX79Vq4";

const CommentsList = ({ comments, setComments }) => {
  const deleteComment = (commentId) => {
    fetch(`${ApiUrl}${commentId}`, {
      method: "DELETE",
      headers: {
        Authorization: Token,
      },
    })
      .then((res) => {
        if (res.ok) {
          setComments(comments.filter((c) => c._id !== commentId))
        } else {
          throw new Error("Errore nella DELETE")
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <ListGroup>
      {comments.map((c) => (
        <ListGroup.Item
          key={c._id}
          className="d-flex justify-content-between align-items-center"
        >
          <span>
            {c.comment} - voto: {c.rate}
          </span>

          <Button
            variant="danger"
            size="sm"
            onClick={() => deleteComment(c._id)}
          >
            Delete
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
export default CommentsList;
