import { Card } from "react-bootstrap"
import CommentArea from "./CommentArea"
import {useState} from "react"

const SingleBook = ({ book }) => {
const [selected, SetSelected] = useState(false)/* li do i valore false perche poi sara cambiato dentro il component */
  return (
    <Card >
      <Card.Img variant="top" src={book.img} onClick={()=> SetSelected(!selected)} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
      </Card.Body>
      {selected && <CommentArea asin={book.asin} />}
      
    </Card>
  )
}

export default SingleBook
