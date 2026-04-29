import { useState } from "react"
import SingleBook from "./SingleBook"
import { Container, Col, Row, Form } from "react-bootstrap"
import libri from "./assets/horror.json"

const BookList = () => {
  // Estado donde guardamos lo que el usuario escribe en el buscador
  const [searchQuery, setSearchQuery] = useState("")

  // Filtramos los libros según el texto escrito
  const filteredBooks = libri.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <Container>
      {/* Campo de búsqueda */}
      <Form className="my-4">
        <Form.Control
          type="search"
          placeholder="Buscar libro..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Form>

      {/* Grilla de libros filtrados */}
      <Row>
        {filteredBooks.map((book) => {
          return (
            <Col xs={12} md={4} lg={3} className="mb-4" key={book.asin}>
              {/* Le pasamos cada libro a SingleBook por props */}
              <SingleBook book={book} />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default BookList
