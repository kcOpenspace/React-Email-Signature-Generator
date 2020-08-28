import React, { useState } from 'react';
import './App.css';
import InputForm from './components/userform/InputForm';
import SignatureTemplate from './components/signature/SignatureTemplate'

const App = () => {

  return (
    <div className="App">
      <div className="form-wrap">
        <InputForm />
      </div>
    </div>
  );
}

export default App;
