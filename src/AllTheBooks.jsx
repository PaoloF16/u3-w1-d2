import libri from "../src/assets/horror.json"
import { Component } from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { Col, Row } from "react-bootstrap"

class AllTheBooks extends Component {
  render() {
    return (
      <>
        <Row className="g-3">
          {libri.map((books) => {
            return (
              <Col xs={12} md={6} xl={3}>
                <Card style={{ width: "15rem" }} key="books.asin">
                  <Card.Img variant="top" src={books.img} />
                  <Card.Body>
                    <Card.Title>{books.title}</Card.Title>
                    <Card.Text>{books.category}</Card.Text>
                    <Button variant="primary">{books.price}</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </>
    )
  }
}
export default AllTheBooks
