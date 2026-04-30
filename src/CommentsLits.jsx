import {ListGroup} from "react-bootstrap"


const CommentsList = ({comments})=>{
    return(
        <ListGroup>
            {comments.map((c)=>{
                <ListGroup.Item key={c._id}>
                    {c.comment}
                </ListGroup.Item>
            })}
        </ListGroup>
    )
}

export default CommentsList