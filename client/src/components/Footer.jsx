import React from 'react';
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className='w-full flex sm:flex-row flex-col justify-between items-center my-4'>
        <div className='flex flex-[0.5] justify-center items-center'>
          <img src={logo} alt="logo" className='w-44'/>
        </div>
        <div className='flex flex-1 justify-evenly items-center flex-wrap sm:mt-4 w-full'>
          <p className='text-white text-base text-center mx-2 cursor-pointer font-bold'>Home</p>          
          <p className='text-white text-base text-center mx-2 cursor-pointer font-bold'>Transactions</p>          
          <p className='text-white text-base text-center mx-2 cursor-pointer font-bold'>About</p>          
          <p className='text-white text-base text-center mx-2 cursor-pointer font-bold'>Wallets</p>          
        </div>
      </div>
      <div className='flex justify-center items-center flex-col mt-5'>
        <p className='text-white text-sm text-center'>JOIN us</p>
        <p className='text-white text-sm text-center'>veselin.d.valkano@gmail.com</p>
      </div>
      <div className='sm:w-[90%] w-full h-[0.25px] bg-gray-400'>

      </div>
      <div className='sm:w-[90%] w-full flex justify-between items-center mt-3'>
      <p className='text-white text-sm text-center'>veselin.d.valkano@gmail.com</p>
      <p className='text-white text-sm text-center'>All Rights Reserver</p>
      </div>
    </div>
  );
}

export default Footer;
