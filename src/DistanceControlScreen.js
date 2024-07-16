import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBars } from '@fortawesome/free-solid-svg-icons';
import io from 'socket.io-client';

// const socket = io('http://localhost:5000'); // Update with your server URL if different
// const socket = io('http://192.168.43.180:5000')
const socket = io('https://uwb-server2.onrender.com')

const DistanceControlScreen = () => {
  const incrementDistance = () => {
    console.log('+');
    
    socket.emit('incrementDistance');
  };

  const decrementDistance = () => {
    console.log('-');
    
    socket.emit('decrementDistance');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className='h-20 flex justify-between items-center px-6'>
        <FontAwesomeIcon icon={faHouse} className="text-blue-500" size="lg" />
        <FontAwesomeIcon icon={faBars} className="text-blue-500" size="lg" />
      </div>

      {/* Control Buttons */}
      <div className="flex-grow flex flex-col justify-center items-center">
        <div className="flex justify-center space-x-4">
          <button
            onClick={decrementDistance}
            className="bg-red-500 text-white px-4 py-2 rounded-full  "
            
          >
            -
          </button>
          <button
            onClick={incrementDistance}
            className="bg-green-500 text-white px-4 py-2 rounded-full"
          >
            +
          </button>
        </div>
      </div>

      {/* Footer */}
      {/* <footer className="text-white py-6 h-20" style={{ backgroundColor: '#38B6FF' }}>
        <div className="relative flex justify-between max-w-4xl mx-auto">
          <div className="absolute -top-8 flex items-center justify-center w-16 h-16 bg-gray-700 rounded-full" style={{ boxShadow: '0 4px 6px rgba(255, 255, 255, 1)', backgroundColor: "#38B6FF" }}>
            <FontAwesomeIcon icon={faHouse} className="text-white text-lg" />
          </div>
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-16 h-16 bg-gray-700 rounded-full" style={{ boxShadow: '0 4px 6px rgba(255, 255, 255, 1)', backgroundColor: "#38B6FF" }}>
            <FontAwesomeIcon icon={faBars} className="text-white text-lg" />
          </div>
          <div className="absolute -top-8 right-0 flex items-center justify-center w-16 h-16 bg-gray-700 rounded-full" style={{ boxShadow: '0 4px 6px rgba(255, 255, 255, 1)', backgroundColor: "#38B6FF" }}>
            <FontAwesomeIcon icon={faHouse} className="text-white text-lg" />
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default DistanceControlScreen;
