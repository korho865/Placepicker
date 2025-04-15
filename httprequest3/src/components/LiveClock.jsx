import { useEffect, useState } from 'react';

export default function LiveClock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    
    return () => {
      clearInterval(interval);
      console.log('LiveClock cleanup: interval cleared');
    };
  }, []); 

  return (
    <p style={{ fontSize: '1.5rem', fontFamily: 'monospace' }}>
      ⏰ {time}
    </p>
  );
}
