import React, { useState, useEffect } from 'react';

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = e => {
    console.log('mouse event');
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    // subscribe to the event (component did mount)
    console.log('useEffect called');
    window.addEventListener('mousemove', logMousePosition);

    // function to unsubscribe to the event (component did unmount)
    return () => {
      console.log('component unmounting code');
      window.removeEventListener('mousemove', logMousePosition);
    };
  }, []);

  return (
    <div>
      <h2>
        x: {x} - y: {y}
      </h2>
    </div>
  );
};

export default HookMouse;
