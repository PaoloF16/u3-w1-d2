import { Component } from "react";
import { Alert, Spinner, ListGroup } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: false,
    isError: false,
  };

  fetchComments = () => {
    // Si no hay libro seleccionado, no hacemos fetch
    if (!this.props.asin) {
      return;
    }

    this.setState({
      isLoading: true,
      isError: false,
    });

    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
      {
        headers: {
          Authorization: "TU_TOKEN_AQUI",
        },
      },
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error al recuperar comentarios");
        }
      })
      .then((comments) => {
        this.setState({
          comments: comments,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          isLoading: false,
          isError: true,
        });
      });
  };

  componentDidUpdate(prevProps) {
    // Solo hacemos fetch cuando cambia el asin seleccionado
    if (prevProps.asin !== this.props.asin) {
      this.fetchComments();
    }
  }

  render() {
    return (
      <div className="mt-4">
        <h4>Comentarios</h4>

        {!this.props.asin && (
          <Alert variant="info">Selecciona un libro para ver comentarios</Alert>
        )}

        {this.state.isLoading && <Spinner animation="border" />}

        {this.state.isError && (
          <Alert variant="danger">Error al cargar comentarios</Alert>
        )}

        {!this.state.isLoading && this.props.asin && (
          <ListGroup>
            {this.state.comments.map((comment) => {
              return (
                <ListGroup.Item key={comment._id}>
                  <strong>{comment.author}</strong>
                  <br />
                  {comment.comment}
                  <br />
                  Valoración: {comment.rate}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        )}
      </div>
    );
  }
}

export default CommentArea;
