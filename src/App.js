import React from 'react';
import './App.css';
import InputForm from './components/userform/InputForm';

const App = () => {

  // TODO:: ALLOW EXPORT TO PDF OR EMAIL

  return (
    <div className="App">
      <div className="form-container">
        <InputForm />
      </div>
    </div>
  );
}

export default App;
