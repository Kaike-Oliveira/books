// Core
import React, { useState } from 'react';

// Components
import { Button } from './components/Button';
import { Input } from './components/Input';

// Icons
import Mail from './icons/Mail';

function App() {
  const [password, setPassword] = useState('');
  const handlePassword = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(event.target.value);
  };
  return (
    <div className="App">
      <h1>Books</h1>
      <Button>Click Me!</Button>
      <Button type="secondary">Click Me!</Button>
      <Input prefix={<Mail />} value="" placeholder="Type your email" />
      <Input placeholder="Type any thing" value={password} onChange={handlePassword} type="password" />
    </div>
  );
}

export default App;
