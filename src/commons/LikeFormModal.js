import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import celebrationIcon from '../assets/celeb-1.PNG'

const LikeFormModal = ({ onClose }) => {
  const [state, handleSubmit] = useForm("xeojjqar");
  
  return (
    <div style={modalOverlayStyle} onClick={onClose}>
      <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        {state.succeeded ? (
            <div className='' style={thankYouPage}>
                <p className=' text-xl font-medium font-quicksand '>Thanks for celebrating with us !</p>
                <img src={celebrationIcon} alt='' className=' w-28 h-28 '/>

            </div>
        ) : (
          <form onSubmit={handleSubmit}
                action="https://formspree.io/f/xeojjqar"
                method="POST"
                style={formStyle}
          >
            <label 
                htmlFor="email" 
                style={labelStyle}
                className=' text-lg font-quicksand font-medium'>
                Email Address
            </label>

            <input 
                id="email" 
                type="email" 
                name="email" 
                style={inputStyle}
                required
            />

            <ValidationError prefix="Email" field="email" errors={state.errors} />
            
            <label 
                htmlFor="message"
                style={labelStyle}>  Your goodwill message to the couple
            </label>
            <textarea 
                id="message" 
                name="message"
                style={textareaStyle}
                required
                className=' text-lg font-quicksand font-medium' 
            />

            <ValidationError prefix="Message" field="message" errors={state.errors} />
            
            <button type="submit" disabled={state.submitting} style={buttonStyle} className=' bg-red-400 text-lg font-quicksand font-semibold text-black'>Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  padding: '10px',
  boxSizing: 'border-box'
  
};

const modalContentStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: '500px',
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '20px',
    boxSizing: 'border-box',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    right: '5%',
    transform: 'translateX(-50%, -50%)',

   
    '@media (max-width: 600px)': {
        padding: '10px',
    },
    '@media (min-width: 600px)': {
        padding: '20px',
    },
    '@media (min-width: 1024px)': {
        padding: '30px',
    },
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column'
  };
  
  const labelStyle = {
    marginBottom: '5px',
    fontSize: '16px'
  };
  
  const inputStyle = {
    marginBottom: '10px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box'
  };
  
  const textareaStyle = {
    marginBottom: '10px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    resize: 'vertical'
  };
  
  const errorStyle = {
    color: 'red',
    marginBottom: '10px'
  };
  
  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '19px',
    border: 'none',
    cursor: 'pointer',
    alignSelf: 'flex-start'
  };

  const thankYouPage = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  
  }

  

export default LikeFormModal;
