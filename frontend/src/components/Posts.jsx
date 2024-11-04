import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

function Posts(props) {


  function handleLike() {
    props.onLike(props.post_id);
  }

  return (
    <div className="card w-full bg-base-100 shadow-md mb-4">
      <div className="card-body">
        <div className="flex items-center mb-2">
          <img src={props.avatar} alt="User Avatar" className="w-8 h-8 rounded-full mr-2" />
          <p className="text-sm text-gray-500">{props.timestamp}</p>
        </div>
        <h2 className="card-title text-lg font-bold">{props.title}</h2>
        <p>{props.content}</p>
        {props.post_image && (
          <img src={props.post_image} alt="Post" className="w-full h-auto rounded mt-2" />
        )}

        <div className="flex justify-between items-center mt-4">
          <button onClick={() => props.onDelete(props.post_id)} >
            <ThumbUpIcon style={{ color: "#f5ba13" }}/> {props.likes}
          </button>
          <button onClick={() => props.onDelete(props.post_id)}>
            <DeleteIcon style={{ color: "#f5ba13" }}/>
          </button>
        </div>
      </div>
    </div>
  );
}


export default Posts;
