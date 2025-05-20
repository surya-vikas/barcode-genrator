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

  const handleClear = () => {
    setText('');
    barcodeRef.current.innerHTML = ''; 
  };


  const handleDownload = () => {
    const svg = barcodeRef.current;
    const svgData = new XMLSerializer().serializeToString(svg);
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'barcode.svg';
    link.click();

    URL.revokeObjectURL(url);
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
        <button onClick={handleClear} style={{ marginTop: '10px', background: '#6b7280' }}>
          Clear
        </button>

        <svg ref={barcodeRef}></svg>

        {text && (
          <button onClick={handleDownload} style={{ marginTop: '15px', background: '#10b981' }}>
            Download SVG
          </button>
        )}
      </div>

      <a
        href="mailto:suryavikas1223@gmail.com?subject=Barcode Generator Issue Report&body=Describe the issue here..."
        className="report-button"
        title="Report Issue"
        aria-label="Report an issue via email"
      >
        ❗
      </a>

      {/* Footer */}
      <div className="container">
        <p className="jui">All rights reserved @surya-vikas</p>
      </div>
    </>
  );
}

export default App;
