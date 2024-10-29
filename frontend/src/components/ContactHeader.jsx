// ContactHeader.js
import React from 'react';

const ContactHeader = ({ onToggle }) => {
  return (
    <div class="static">

        <div className="avatar static">
            <div className="w-14 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
        </div> 

        <span className="inline-block">Username</span>

        <div class="inline-block right-0">
            <div>
                <label className="btn btn-circle swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" onClick={onToggle}/>

                        {/* hamburger icon */}
                        <svg
                            className="swap-off fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 512 512">
                            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                        </svg>

                        {/* close icon */}
                        <svg
                            className="swap-on fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 512 512">
                            <polygon
                            points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                        </svg>
                    </label>
                </div>
            </div>
    </div>
  );
};

export default ContactHeader;
