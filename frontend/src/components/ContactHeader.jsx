// ContactHeader.js
import React from 'react';

const ContactHeader = ({ onToggle, isExpanded}) => {
  return (
    <div class="flex items-center justify-between p-2 rounded-t-lg shadow cursor-pointer hover:bg-gray-50" onClick={onToggle}>
        <div className="flex items-center space-x-2">
            <div className="avatar">
                <div className="w-8 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div> 
            <span className="text-sm font-semibold">Username</span>
        </div>
 

        <div onClick={(e) => e.stopPropagation()}> {/* 防止点击按钮时触发标题栏的切换 */}
                <label className="btn btn-circle btn-xs swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" checked={isExpanded} onChange={onToggle} />

                        {/* hamburger icon */}
                        <svg
                             className="w-8 swap-on fill-current"
                             xmlns="http://www.w3.org/2000/svg"
                             width="16"
                             height="16"
                             viewBox="0 0 24 24">
                             <path d="M12 16l-6-6h12z" />
                        </svg>

                        {/* close icon */}
                        <svg
                            className="w-8 swap-off fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24">
                            <path d="M12 8l6 6H6z" />
                        </svg>
                    </label>
                </div>

    </div>
  );
};

export default ContactHeader;
