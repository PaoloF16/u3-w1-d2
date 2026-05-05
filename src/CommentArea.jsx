import { useState, useEffect } from "react";
import { Alert, Spinner, ListGroup } from "react-bootstrap";
const ApiUrl = "https://striveschool-api.herokuapp.com/api/comments/";
const Token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWUxZTFhYzczOWY4NzAwMTU3YWIwODgiLCJpYXQiOjE3NzY0MTEwNTIsImV4cCI6MTc3NzYyMDY1Mn0.TlevMKTw6sR2qLolKy_AF0czZscRN7wRkVPwPX79Vq4";

const CommentArea = (props) => {
  const [comment, SetComment] = useState([]);
  const [loading, SetLoading] = useState(false);
  const [isError, SetIsError] = useState(false);

  const getComments = async () => {
    SetLoading(true);
    SetIsError(false);
    try {
      const response = await fetch(ApiUrl + props.asin, {
        method: "GET",
        headers: {
          Authorization: Token,
        },
      });
      if (!response.ok) {
        throw new Error("Error fetching comments");
      }
      const data = await response.json();
      SetComment(data);
    } catch (error) {
      SetIsError(true);
    } finally {
      SetLoading(false);
    }
  };
  useEffect(() => {
    if (props.asin) {
      getComments();
    }
  }, [props.asin]);
  return (
    <div className="mt-4">
      <h4>Comentarios</h4>

      {!props.asin && (
        <Alert variant="info">Selecciona un libro para ver comentarios</Alert>
      )}

      {loading && <Spinner animation="border" />}

      {isError && <Alert variant="danger">Error al cargar comentarios</Alert>}

      {!loading && props.asin && (
        <ListGroup>
          {comment.map((c) => {
            return (
              <ListGroup.Item key={c._id}>
                <strong>{c.author}</strong>
                <br />
                {c.comment}
                <br />
                Valoración: {c.rate}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      )}
    </div>
  );
};

export default CommentArea;
