import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreatePostArea(props) {
    
    const [isExpanded, setExpanded] = useState(false);
    const [post, setPost] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setPost((prevPost) => ({
            ...prevPost,
            [name]: value
        }));
    }

    function submitPost(event) {
        event.preventDefault(); 
        const newPost = {
            ...post,
            timestamp: new Date().toLocaleString(), // 当前时间
            avatar: "https://via.placeholder.com/30", // 默认头像
            likes: 0, // 初始点赞数
            commentsCount: 0 // 初始评论数
        };

        props.onAdd(newPost);
        setPost({
            title: "",
            content: ""
        });
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
                    style={styles.textarea}
                />

                <Zoom in={isExpanded}>
                    <Fab onClick={submitPost} style={styles.fabButton}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
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
    textarea: {
      width: "100%",
      border: "none",
      padding: "4px",
      outline: "none",
      fontSize: "1.2em",
      fontFamily: "inherit",
      resize: "none",
      marginTop: "8px"
    },
    fabButton: {
      backgroundColor: "#f5ba13",
      color: "#fff",
      position: "absolute",
      right: "18px",
      bottom: "-18px"
    }
};

export default CreatePostArea;
