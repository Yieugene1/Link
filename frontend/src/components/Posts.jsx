import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

function Posts(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  function handleLike() {
    props.onLike(props.id);
  }

  return (
    <div style={styles.post}>
      <div style={styles.header}>
        <img src={props.avatar} alt="User Avatar" style={styles.avatar} />
        <div style={styles.titleContainer}>
          <h1 style={styles.h1}>{props.title}</h1>
          <span style={styles.timestamp}>{props.timestamp}</span>
        </div>
      </div>
      {props.image && <img src={props.image} alt="Post Image" style={styles.image} />}
      <p style={styles.p}>{props.content}</p>
      <div style={styles.actions}>
        <button onClick={handleLike} style={styles.button}>
          <ThumbUpIcon /> {props.likes}
        </button>
        <button onClick={handleClick}>
          <DeleteIcon style={{ color: "#f5ba13" }}/>
        </button>
        <button style={styles.commentButton}>评论 ({props.commentsCount})</button>
      </div>
    </div>
  );
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
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: "8px"
  },
  avatar: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    marginRight: "10px"
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  h1: {
    fontSize: "1.1em",
    margin: 0
  },
  timestamp: {
    fontSize: "0.8em",
    color: "#888",
    marginTop: "2px"
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "5px",
    margin: "10px 0"
  },
  p: {
    fontSize: "1.1em",
    marginBottom: "10px",
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
    textAlign: "left",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  button: {
    display: "flex",
    alignItems: "center",
    color: "#f5ba13",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    outline: "none"
  },
  commentButton: {
    fontSize: "0.9em",
    color: "#555",
    cursor: "pointer",
    textDecoration: "underline"
  }
};

export default Posts;
