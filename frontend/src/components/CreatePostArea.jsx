import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreatePostArea(props){
    
    const [isExpanded, setExpanded] = useState(false);
    const [post, setPost] = useState({
        title: "",
        content: "",
    });

    function handleChange(event){
        const { name, value } = event.target;
        setPost((prevPost) => {
            return {
                ...prevPost,
                [name]: value,
            };
        });
    }

    function submitPost(event){
        props.onAdd(post);
        setPost({
            title: "",
            content: "",
        });
        event.preventDefault();
    }

    function expand() {
        setExpanded(true);
      }

    return (
        <div>
            <form style={styles.form}>
                {isExpanded && (
                    <input
                        name="title"
                        onChange={handleChange}
                        value={post.title}
                        placeholder="Title"
                        style={styles.input}
                    />
                )}

                <textarea
                    name="content"
                    onClick={expand}
                    onChange={handleChange}
                    value={post.content}
                    placeholder="Say something"
                />

                <Zoom in={isExpanded} style={{ backgroundColor: "#f5ba13", color: "#fff", }}>
                    <Fab onClick = {submitPost}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}

const styles = {
    form: {
      position: "relative",
      width: "480px",
      margin: "30px auto 20px auto",
      background: "#fff",
      padding: "15px",
      borderRadius: "7px",
      boxShadow: "0 1px 5px rgb(138, 137, 137)"
    },
    input: {
      width: "100%",
      border: "none",
      padding: "4px",
      outline: "none",
      fontSize: "1.2em",
      fontFamily: "inherit",
      resize: "none"
    },
    button: {
      position: "absolute",
      right: "18px",
      bottom: "-18px",


      border: "none",
      borderRadius: "50%",
      width: "36px",
      height: "36px",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
      cursor: "pointer",
      outline: "none"
    }
};


export default CreatePostArea;