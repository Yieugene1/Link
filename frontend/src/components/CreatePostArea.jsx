import React, { useState } from "react";
import { CreatePost } from '../lib/fetch';

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
        const newPost = {
            ...post,
            timestamp: new Date().toLocaleString(),
            avatar: "https://via.placeholder.com/30",
            likes: 0,
        };

        const response = await CreatePost(newPost.title,newPost.content,newPost.image,newPost.avatar);
        if (response.ok){
            console.log("Post submitted successfully");
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
            console.log("error");
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
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-[600px] max-w-full relative">
                        <button className="absolute top-2 right-2 text-gray-600" onClick={toggleModal}>
                            &times;
                        </button>
                        <h3 className="text-xl font-bold mb-4">Create a Post</h3>
                        <form onSubmit={submitPost} className="space-y-4 max-w-full" >
                            <input
                                name="title"
                                onChange={handleChange}
                                value={post.title}
                                placeholder="Title"
                                className="input input-bordered w-full"
                            />
                            <textarea
                                name="content"
                                onChange={handleChange}
                                value={post.content}
                                placeholder="Content"
                                className="input input-bordered w-full h-48"
                            />

                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                id="image-upload"
                                className="hidden"
                            />
                            <label htmlFor="image-upload" className="btn btn-outline btn-primary flex items-center space-x-2 cursor-pointer">
                                <span>上传图片</span>
                            </label>
                            {uploadStatus && <p className="text-sm text-gray-500">{uploadStatus}</p>}
                            {post.image && (
                                <div className="mt-4">
                                    <img src={post.image} alt="Preview" className="w-32 h-32 object-cover rounded-md border" />
                                </div>
                            )}

                            <button type="submit" className="btn btn-primary w-full">Submit Post</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CreatePostArea;
