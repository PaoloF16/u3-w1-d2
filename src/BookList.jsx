import { useState } from "react";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import { Container, Col, Row, Form } from "react-bootstrap";
import libri from "./assets/horror.json";

const BookList = () => {
  // Estado para la búsqueda
  const [searchQuery, setSearchQuery] = useState("");

  // Estado para guardar el asin del libro seleccionado
  const [selectedAsin, setSelectedAsin] = useState(null);

  // Filtramos los libros según el texto del input
  const filteredBooks = libri.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <Container>
      <Row>
        {/* COLUMNA IZQUIERDA: buscador + libros */}
        <Col xs={12} md={8}>
          <Form className="my-4">
            <Form.Control
              type="search"
              placeholder="Buscar libro..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form>

          <Row>
            {filteredBooks.map((book) => {
              return (
                <Col xs={12} md={6} lg={4} className="mb-4" key={book.asin}>
                  <SingleBook
                    book={book}
                    selectedAsin={selectedAsin}
                    setSelectedAsin={setSelectedAsin}
                  />
                </Col>
              );
            })}
          </Row>
        </Col>

        {/* COLUMNA DERECHA: comentarios */}
        <Col xs={12} md={4}>
          <CommentArea asin={selectedAsin} />
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;
