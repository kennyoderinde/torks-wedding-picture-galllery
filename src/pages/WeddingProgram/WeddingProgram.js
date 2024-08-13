import React from 'react';
import './Leaves.css';
import './PdfButton.css'
import './ButtonCenter.css'


const PdfPage = () => {
  const openPdf = () => {
    const pdfUrl = '/tork-wedding-program-pdf-format.pdf'; // Assuming the file is in the public folder
    window.open(pdfUrl, '_blank');
  };

  return (
    <>

     <div id="leaves">
      {[...Array(35)].map((_, index) => (
        <i key={index}></i>
      ))}
    </div>

    <div className="container">
      <div className='w-80 h-40 bg-white'>
        <h1>PDF Page</h1>
        <button onClick={openPdf}>
          <span>Open PDF</span>
        </button>
      </div>
    </div>

    <div id="leaves">
      {[...Array(15)].map((_, index) => (
        <i key={index}></i>
      ))}
    </div>

    </>
    
  );
};

export default PdfPage;







