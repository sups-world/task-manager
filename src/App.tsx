import React from 'react';
import './App.css';
import InputField from './components/InputField';

//react.fc===functional component
const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Task Manager</span>
      <InputField />
    </div>
  );
}

export default App;
