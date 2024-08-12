import React from 'react';

const PdfPage = () => {
  const openPdf = () => {
    const pdfUrl = '/tork-wedding-program-pdf-format.pdf'; // Assuming the file is in the public folder
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className='w-20 h-10 bg-white mt-40'>
      <h1 className=''>PDF Page</h1>
      <button onClick={openPdf}>Open PDF</button>
    </div>
  );
};

export default PdfPage;

