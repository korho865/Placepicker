import { useState } from 'react';
import UserList from './components/UserList';
import LiveClock from './components/LiveClock';

function App() {
  const [showClock, setShowClock] = useState(true);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>User Directory</h1>

      <button
        onClick={() => setShowClock((prev) => !prev)}
        style={{ marginBottom: '1rem' }}
      >
        {showClock ? 'Hide Clock' : 'Show Clock'}
      </button>

      {showClock && <LiveClock />}

      <UserList />
    </div>
  );
}

export default App;
