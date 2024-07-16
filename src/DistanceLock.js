import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faBluetoothB } from '@fortawesome/free-brands-svg-icons';

const socket = io('https://uwb-server2.onrender.com');
// const socket = io('http://192.168.43.180:5000');

const DistanceLock = () => {
  const [distance, setDistance] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Handle connection status
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    // Listen for distance updates
    socket.on('distanceUpdate', (newDistance) => {
      setDistance(newDistance);
    });

    // Cleanup on component unmount
    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('distanceUpdate');
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' ,height:"1500px"}}>
      <h1 style={{ position: 'absolute', top: '40px', width: '100%', textAlign: 'center',fontWeight:"bold" }}>BMW x5</h1>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        color: isConnected ? 'green' : 'red', 
        fontSize: 'small', 
        position: 'absolute', 
        top: '25%', 
        width: '100%' 
      }}>
        <FontAwesomeIcon icon={faCircle} style={{ marginRight: '5px' }} />
        <FontAwesomeIcon 
                    icon={faBluetoothB} 
                    className={`text-sm mr-2 ${isConnected ? 'text-green-500' : 'text-gray-500'} mx-2`} 
                />
        {isConnected ? 'Connected' : 'Disconnected'}
      </div>
      <div style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: '50%', 
        border: `5px solid ${distance !== null && distance < 3 ? 'green' : 'red'}`, 
        width: '300px', 
        height: '300px' 
      }}>
        <h1 style={{ fontSize: '4em', margin: '0' }}>
          {distance !== null && distance < 3 ? 'Unlock' : 'Locked'}
        </h1>
      </div>
    </div>
  );
};

export default DistanceLock;
