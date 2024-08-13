import React from 'react';
import './Leaves.css';
import './PdfButton.css'
import './ButtonCenter.css'


const PdfPage = () => {
  const openPdf = () => {
    const pdfUrl = '/tork-wedding-program-pdf-format.pdf'; // Assuming the file is in the public folder
    window.open(pdfUrl, '_blank');
  };

  const openPdfReceptn = () => {
    const pdfUrl = '/tork-reception-program-pdf-format.pdf'; // Assuming the file is in the public folder
    window.open(pdfUrl, '_blank');
  };

  return (
    <>

     <div id="leaves" >
      {[...Array(35)].map((_, index) => (
        <i key={index}></i>
      ))}
    </div>

    <div className="container bg-black -mt-20">
      <div className='w-60 h-44 bg-white py-5 rounded-md'>
        <h1 className=' text-md font-semibold'>Tork24 Church Program</h1>
        <p className=' text-base font-medium'>Kindly click to view</p> 
        <button onClick={openPdf} className='pdf-btn'>
          <span>Open PDF</span>
        </button>
      </div>
    </div>

    <div id="leaves">
      {[...Array(15)].map((_, index) => (
        <i key={index}></i>
      ))}
    </div>


    <div className="container bg-black -mt-80">
      <div className='w-60 h-44 bg-white py-5 rounded-md'>
        <h1 className=' text-md font-semibold'>Tork24 Reception Program</h1>
        <p className=' text-base font-medium'>Kindly click to view</p> 
        <button onClick={openPdfReceptn} className='pdf-btn'>
          <span>Open PDF</span>
        </button>
      </div>
    </div>
    
    </>
    
  );
};

export default PdfPage;







