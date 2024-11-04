import React, { useState } from "react";
import { CreatePost } from '../lib/fetch';
import PostModal from './PostModal';

function CreatePostArea({ onPostAdded }) {
    const [isOpen, setIsOpen] = useState(false);
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

    const submitPost =async(e)=>{
        e.preventDefault();

        const response = await CreatePost(post.title, post.content, post.image);
        if (response.ok){
            onPostAdded(); 
            setPost({
                title: "",
                content: "",
                image: null,
            });
            setUploadStatus("");
            setIsOpen(false); // 关闭模态窗口

        } else {
            const data = await response.json();
            console.log("Error:", data);
        }
    };   

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            {/* 打开模态窗口的按钮 */}
            <input
                onClick={toggleModal}
                placeholder="Say something"
                className="input input-bordered w-full"
            />

            {/* 模态窗口 */}
            <PostModal
                isOpen={isOpen}
                toggleModal={toggleModal}
                submitPost={submitPost}
                post={post}
                handleChange={handleChange}
                handleImageUpload={handleImageUpload}
                uploadStatus={uploadStatus}
            />
        </div>
    );
}

export default CreatePostArea;
