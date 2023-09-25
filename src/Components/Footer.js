import React from 'react';

const Footer = () => {
  return (
    <>
    <div className='w-full h-52 bg-black flex items-center justify-center'>
      <p className='font-serif text-white'>
        copyright &copy; 
        <span id='date'>{new Date().getFullYear()}</span>
      </p>
    </div>
    </>
  );
}

export default Footer;