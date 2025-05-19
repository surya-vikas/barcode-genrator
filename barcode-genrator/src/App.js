import React, { useRef, useState } from 'react';
import JsBarcode from 'jsbarcode';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const barcodeRef = useRef(null);

  const handleGenerate = () => {
    if (text.trim() === '') {
      alert('Please enter something!');
      return;
    }

    JsBarcode(barcodeRef.current, text, {
      format: 'CODE128',
      lineColor: '#000',
      width: 2,
      height: 100,
      displayValue: true,
    });
  };

return (
  <>
    <div className="app-container">
      <h1>Barcode Generator</h1>
      <input
        type="text"
        placeholder="Enter text or number"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleGenerate}>Generate Barcode</button>
      <svg ref={barcodeRef}></svg>
    </div>

    <a
      href="mailto:suryavikas1223@gmail.com?subject=Barcode Generator Issue Report&body=Describe the issue here..."
      className="report-button"
      title="Report Issue"
    >
      ❗
    </a>
<div className="container">
  <p className='jui'>All rights reserved @surya-vikas</p>
</div>  </>
);

}

export default App;
