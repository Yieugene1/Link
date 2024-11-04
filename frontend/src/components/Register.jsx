import React, { useState } from 'react';
import { TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux'
import { signIn } from '../store/userSlice.js'
import { register } from '../lib/fetch'
import { useNavigate } from 'react-router-dom';
const Register = ({ handleClick }) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [success, setSuccess] = useState(''); 
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        console.log({ name, email, password });

        const response = await register(name, email, password);
        if (response.ok) {
                dispatch(signIn())
                setSuccess('Signed up successfully!'); 
                setTimeout(() => {
                    handleClick();
                  }, 1500);
                
                
        }
        else {
                const data = await response.json();
                setError(data.username);
            }

    };

    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg w-[400px] h-[560px] overflow-y-auto opacity-80">

                <p className="text-2xl font-bold mb-4 text-black">Register</p>


                <form onSubmit={handleSubmit}>
                    <TextField
                        margin="normal"
                        fullWidth
                        type="text"
                        label="username"
                        value={name} // 修正为小写的 name
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        type="email"
                        label="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        type="password"
                        label="password"
                        value={password}
                        variant="outlined"
                        
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        type="password"
                        label="confirm password"
                        value={confirmPassword} // 确认密码输入框
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {success && <p className='text-green-500 mb-4'>{success}</p>}
                    {error && <p className='text-red-500 mb-4'>{error}</p>}
                    <button
                        type="submit"
                        className="btn btn-primary text-white w-full mt-4"
                    >
                        Register
                    </button>
                </form>
                <p className="mt-4 text-black">
                    Already have an account?{' '}
                    <span onClick={handleClick} className="text-blue-500 cursor-pointer">
                        Login here
                    </span>
                </p>
            </div>
        </div >
    );
};

export default Register;
