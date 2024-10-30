import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreatePostArea(props) {
    
    const [isExpanded, setExpanded] = useState(false);
    const [uploadStatus, setUploadStatus] = useState("");

    const [post, setPost] = useState({
        title: "",
        content: "",
        image: null,
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setPost((prevPost) => ({
            ...prevPost,
            [name]: value
        }));
    }

    function handleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();

          setUploadStatus("正在上传...");

          reader.onloadend = () => {
            setPost((prevPost) => ({ ...prevPost, image: reader.result }));
            setUploadStatus("上传成功！");
          };

          reader.readAsDataURL(file);
        }
    }

    function submitPost(event) {
        event.preventDefault(); 
        const newPost = {
            ...post,
            timestamp: new Date().toLocaleString(),
            avatar: "https://via.placeholder.com/30", // 默认头像
            likes: 0, // 初始点赞数
        };

        props.onAdd(newPost);

        setPost({
            title: "",
            content: "",
            image: null,
        });
        setUploadStatus("");
        document.getElementById("image-upload").value = null;
    }

    function expand() {
        setExpanded(true);
    }

    return (
        <div>
            <form style={styles.form}>

                <input
                    name="title"
                    onClick={expand}
                    onChange={handleChange}
                    value={post.title}
                    placeholder="Say something"
                    className="input w-full mb-2"
                />

                {isExpanded && (
                    <textarea
                        name="content"
                        onChange={handleChange}
                        value={post.content}
                        placeholder="......"
                        className="textarea  w-full mb-2"
                    />
                )}

                {isExpanded && (
                    <div>
                        <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        id="image-upload"
                        className="hidden file-input file-input-bordered w-full mb-2" // 隐藏默认文件输入框
                        />
                        <label htmlFor="image-upload" className="btn btn-outline btn-primary flex items-center space-x-2 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm10 7a2 2 0 11-4 0 2 2 0 014 0zm-5 4l3-3 4 4H5l2-2z" />
                            </svg>
                            <span>上传图片</span>
                        </label>
                        {uploadStatus && <p className="text-sm text-gray-500 mt-2">{uploadStatus}</p>}
                        {post.image && (
                            <div className="mt-4">
                            <img src={post.image} alt="Preview" className="w-32 h-32 object-cover rounded-md border" />
                            </div>
                        )}
                    </div>
                    
                )}

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
    fabButton: {
      backgroundColor: "#f5ba13",
      color: "#fff",
      position: "absolute",
      right: "18px",
      bottom: "-18px"
    }
};

export default CreatePostArea;
