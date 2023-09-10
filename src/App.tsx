// Core
import React, { useState } from 'react';

// Components
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Options } from './components/Options';

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
      <Options options={[
        {
          id: 1,
          type: 'E-book',
          price: '00,00',
          description: '.pdf, .epub, .mob',
        },
        {
          id: 2,
          type: 'E-book',
          price: '00,00',
          description: '.pdf, .epub, .mob',
        },
      ]}
      />
    </div>
  );
}

export default App;
