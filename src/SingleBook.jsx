import { Card } from "react-bootstrap"
import CommentArea from "./CommentArea"

const SingleBook = ({ book }) => {

  return (
    <Card>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
      </Card.Body>
      <CommentArea></CommentArea>
    </Card>
  )
}

export default SingleBook
