import React from 'react';

function ModalCard({ isOpen, onClose, onConfirm, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm w-full">
                <div className="text-lg">{children}</div>
                <div className="mt-4 flex justify-end space-x-2">
                    <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded">
                        Cancel
                    </button>
                    <button onClick={onConfirm} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalCard;
