import React, { useEffect } from 'react'
import useTrackStore from '../store/trackStore';

interface AlertMessageProps {
  message?: string;
  code?: number;
  duration: number;
  isrc: string;
  onClose: () => void;
}

export const AlertMessage = ({ message, duration, onClose, code, isrc }: AlertMessageProps) => {

  const { addTrack } = useTrackStore()

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const handleAddTrack = () => {
    addTrack(isrc);
    onClose();
}

  return (
    <div className="fixed top-0 left-0 w-full bg-red-500 text-white text-center p-4 shadow-lg z-50">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <p className="text-sm sm:text-base">{message}</p>
        <div>
        {code === 404 &&(
          <button
            onClick={handleAddTrack}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900"
          >
            Add Track
          </button>
        )}
        <button
          onClick={onClose}
          className="text-white hover:text-red-200 transition duration-300 ml-4"
        >
          ✕
        </button>
        </div>
      </div>
    </div>
  )
}
