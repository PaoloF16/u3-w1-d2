import { Card } from "react-bootstrap";

const SingleBook = ({ book, selectedAsin, setSelectedAsin }) => {
  return (
    <Card
      onClick={() => setSelectedAsin(book.asin)}
      style={{
        border: selectedAsin === book.asin ? "3px solid red" : "none",
        cursor: "pointer",
      }}
    >
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
