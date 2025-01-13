import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/members`)
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);
  console.log(message);
  return <div className="text-4xl">{message}</div>;
}

export default App
