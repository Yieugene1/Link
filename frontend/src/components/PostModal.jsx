import React from "react";

function PostModal({ isOpen, toggleModal, submitPost, post, handleChange, handleImageUpload, uploadStatus }) {
    if (!isOpen) return null;

    return (
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
                        <img src={post.image} alt="Preview" className="w-32 h-32 object-cover rounded-md border" />
                    )}
                    <button type="submit" className="btn btn-primary w-full">Submit Post</button>
                </form>
            </div>
        </div>
    );
}

export default PostModal;
