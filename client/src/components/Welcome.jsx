import React from 'react';
import { AiFillAlipayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import {BsInfoCircle} from 'react-icons/bs';

import {Loader} from './';

const commanStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Welcome = () => {

  const connectWallet =() =>{
    
  }
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row  flex-col items-start justify-between md:p-20 py-12 px-4 ">
        <div className="flex flex-1 justify-start flex-col md:mr-10 ">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">Send Crypto <br/>across the world </h1>
          <p className="text-left mt-5 text-white font-white md:w-9/12 w-11/12 text-base">Explore the crypto world.Buy and sell crypto easy </p>
          <button type='button' onClick={connectWallet}
          className="flex flex-row justify-center item-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            <p className="text-white text-base font-semibold">Connect Wallet</p>
          </button>
          <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'>
            <div className={`rounded-tl-3xl ${commanStyles}`}>Reliability</div>
            <div className={`${commanStyles}`}>Security</div>
            <div className={`rounded-tr-3xl ${commanStyles}`}>Etherium</div>
            <div className={`rounded-bl-3xl ${commanStyles}`}>Web3.0</div>
            <div className={`${commanStyles}`}>Low fees</div>
            <div className={`rounded-br-3xl ${commanStyles}`}>Blockchain</div>
          </div>
        </div>
        <div className='flex flex-col flex-1 items-center justify-start w-fill md:mt-1 mt-10'>
          <div className='p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorpishm'>
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between item-start">
                <div className='w-9 h-9 rounded-full border-2 border-white flex justify-center item-center'>
                  <SiEthereum fontSize={28} color="#fff"/>
                </div>
                <BsInfoCircle  fontSize={17} color="#fff"/>
              </div>
              <div>
                <p className='text-white font-light text-sm'>
                  Adress
                </p>
                <p className='text-white font-semibold text-lg mt-1'>
                  Ethereum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
