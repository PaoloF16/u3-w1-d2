import { FloatingLabel, Form } from "react-bootstrap";

const CommentArea = ()=>{
    return (
        <>
         <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
          />
      </FloatingLabel>
          </>
    )
}

export default CommentArea