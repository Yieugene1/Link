import React from 'react';

const UserInfoCard = () => {
    const user = {
      name: 'Tom',
      title: 'Full-stack Developer',
      email:'Linkapp@test.com',
      avatar: 'https://via.placeholder.com/150', // 头像URL
      bio: 'Passionate about coding and creating scalable web applications.',
      posts:'20',
      fans:'150',
      following:'100'
    };
  
    return (

      <div className=" w-96 shadow-xl p-4 flex space-x-4">

        <div className="flex items-center w-1/3">
          <div className="avatar ">
            <div className="w-24 rounded-full flex-shrink-0 mr-4">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>

        <div className='flex flex-col'>
          <div className="flex items-center space-x-2">
            <h2 className="card-title">{user.name}</h2>
            <button className="text-blue-500 hover:underline text-sm">Edit</button>
          </div>

          <div className="flex space-x-4 mt-1 text-gray-700">
            <p>Posts: <span className="font-semibold">{user.posts}</span></p>
            <p>Fans: <span className="font-semibold">{user.fans}</span></p>
            <p>Following: <span className="font-semibold">{user.following}</span></p>
          </div>

          <p className="text-gray-600 mt-1">{user.bio}</p>
          <p className="text-gray-500 mt-1">{user.email}</p>

        </div>

      </div>
    );
  };
  
  export default UserInfoCard;