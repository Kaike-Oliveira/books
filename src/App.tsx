import React from 'react';
import { Button } from './components/Button';
import { Input } from './components/Input';

function App() {
  return (
    <div className="App">
      <h1>Books</h1>
      <Button>Click Me!</Button>
      <Button type="secondary">Click Me!</Button>
      <Input prefix="+" placeholder="Type any thing" />
    </div>
  );
}

export default App;
