import React from 'react';
import './App.css';
import './components/userform/InputForm';
import InputForm from './components/userform/InputForm';
import SignatureTemplate from './components/signature/SignatureTemplate'

const App = () => {
  return (
    <div className="App">
      <div className="form-wrap">
        <InputForm/>
      </div>
      <div className="signature-wrap">
        <SignatureTemplate />
      </div>
    </div>
  );
}

export default App;
