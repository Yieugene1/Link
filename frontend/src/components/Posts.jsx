import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Posts(props){
    function handleClick(){
        props.onDelete(props.id);
    }

    return (
        <div style={styles.post}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>
                <DeleteIcon style={{ color: "#f5ba13" }}/>
            </button>
        </div>
    )
}

const styles = {
    post: {
      background: "#fff",
      borderRadius: "7px",
      boxShadow: "0 2px 5px #ccc",
      padding: "10px",
      width: "240px",
      margin: "16px",
      float: "left"
    },
    h1: {
      fontSize: "1.1em",
      marginBottom: "6px"
    },
    p: {
      fontSize: "1.1em",
      marginBottom: "10px",
      whiteSpace: "pre-wrap",
      wordWrap: "break-word"
    },
    button: {
      position: "relative",
      float: "right",
      marginRight: "10px",
      color: "#f5ba13",
      border: "none",
      width: "36px",
      height: "36px",
      cursor: "pointer",
      outline: "none",
      backgroundColor: "transparent"
    }
  };

export default Posts;