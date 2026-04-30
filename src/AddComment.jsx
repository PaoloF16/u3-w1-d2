import { useState } from "react"
import { Button, Form } from "react-bootstrap"

const ApiUrl = "https://striveschool-api.herokuapp.com/api/comments/"
const Token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWUxZTFhYzczOWY4NzAwMTU3YWIwODgiLCJpYXQiOjE3NzY0MTEwNTIsImV4cCI6MTc3NzYyMDY1Mn0.TlevMKTw6sR2qLolKy_AF0czZscRN7wRkVPwPX79Vq4";


const AddComment = ({ asin }) => {
  const [newComment, setNewComment] = useState({
    comment: "",
    rate: "1",
    elementId: asin,
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch(ApiUrl, {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        "Content-Type": "application/json",
        Authorization: Token,
      },
    })
      .then((res) => {
        if (res.ok) {
          alert("Commento aggiunto!")
          setNewComment({
            comment: "",
            rate: "1",
            elementId: asin,
          })
        } else {
          throw new Error("Errore nella POST")
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-2">
        <Form.Label>Recensione</Form.Label>
        <Form.Control
          as="textarea"
          value={newComment.comment}
          onChange={(e) =>
            setNewComment({
              ...newComment,
              comment: e.target.value,
            })
          }
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Voto</Form.Label>
        <Form.Select
          value={newComment.rate}
          onChange={(e) =>
            setNewComment({
              ...newComment,
              rate: e.target.value,
            })
          }
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
      </Form.Group>

      <Button type="submit">Invia commento</Button>
    </Form>
  )
}

export default AddComment