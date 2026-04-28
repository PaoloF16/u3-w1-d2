import libri from "../public/horror.json"
import { Component } from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

class AllTheBooks extends Component {
  render() {
    return (
      <>
        {libri.map((books) => {
          return (
            <Card style={{ width: "18rem" }} key="books.asin">
              <Card.Img variant="top" src={books.img} />
              <Card.Body>
                <Card.Title>{books.title}</Card.Title>
                <Card.Text>{books.category}</Card.Text>
                <Button variant="primary">{books.price}</Button>
              </Card.Body>
            </Card>
          )
        })}
      </>
    )
  }
}
export default AllTheBooks
