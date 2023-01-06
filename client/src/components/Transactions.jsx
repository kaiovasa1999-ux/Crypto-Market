import React, {useContext }from 'react';
import {TransactionContext} from "../context/TransactionContext.jsx";
import { shortenAddressChars } from '../utils/shortenAddressChars.js';

let demoDataTransactions = [
  {
    id: 1,
    url: "https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284",
    message: "",
    timestamp: "12/21/2021, 4:33:21 PM",
    addressFrom: "0xCF8e569A97C423952DdFf902375C7C76549A6A90",
    amount: "0.01",
    addressTo: "0x8aa395Ab97837576aF9cd6946C79024ef1acfdbE",
  },
  {
    id: 2,
    url: "https://media4.popsugar-assets.com/files/2013/11/07/832/n/1922398/eb7a69a76543358d_28.gif",
    message: "",
    timestamp: "12/21/2021, 4:33:21 PM",
    addressFrom: "0xCF8e569A97C423952DdFf902375C7C76549A6A90",
    amount: "0.01",
    addressTo: "0x8aa395Ab97837576aF9cd6946C79024ef1acfdbE",
  },
  {
    id: 3,
    url: "https://acegif.com/wp-content/uploads/gif-shaking-head-38.gif",
    message: "",
    timestamp: "12/21/2021, 4:33:21 PM",
    addressFrom: "0xCF8e569A97C423952DdFf902375C7C76549A6A90",
    amount: "0.01",
    addressTo: "0x8aa395Ab97837576aF9cd6946C79024ef1acfdbE",
  },
  {
    id: 4,
    url: "https://i.pinimg.com/originals/68/a0/9e/68a09e774e98242871c2db0f99307420.gif",
    message: "I never stop learning mate !!!",
    timestamp: "12/21/2021, 4:33:21 PM",
    addressFrom: "0xCF8e569A97C423952DdFf902375C7C76549A6A90",
    amount: "0.01",
    addressTo: "0x8aa395Ab97837576aF9cd6946C79024ef1acfdbE",
  },
  {
    id: 5,
    url: "https://i.pinimg.com/originals/73/d3/a1/73d3a14d212314ab1f7268b71d639c15.gif",
    message: "",
    timestamp: "12/21/2021, 4:33:21 PM",
    addressFrom: "0xCF8e569A97C423952DdFf902375C7C76549A6A90",
    amount: "0.01",
    addressTo: "0x8aa395Ab97837576aF9cd6946C79024ef1acfdbE",
  },
  {
    id: 6,
    url: "https://www.omnisend.com/blog/wp-content/uploads/2016/09/funny-gifs-9.gif",
    message: "",
    timestamp: "12/21/2021, 4:33:21 PM",
    addressFrom: "0xCF8e569A97C423952DdFf902375C7C76549A6A90",
    amount: "0.01",
    addressTo: "0x8aa395Ab97837576aF9cd6946C79024ef1acfdbE",
  },
];


const TramsactionCard = ({addressTo,message, addressFrom,amount,timestamp,url}) =>{
  return  (
    <div className='bg-[#181918] m-4 flex flex-1 
    2xl:min-w-[450px]
    2xl:max-w-[525px]
    sm:min-w-[250px]
    2xl:max-w-[300px]
    flex-col p-3 rounded-md hover:shadow-2xl'>
      <div className='flex flex-col items-center w-full mt-4'>
        <div className=' w-full mb-7 p-2'>
          <a href={`https://goerli.etherscan.io/address/${addressFrom}`} target="_blank" rel="noopenre nreferrer">
            <p className='text-white text-base '> From: {shortenAddressChars(addressFrom)}</p>
          </a>
          <a href={`https://goerli.etherscan.io/address/${addressFrom}`} target="_blank" rel="noopenre nreferrer">
            <p className='text-white text-base '>AddressTo: {shortenAddressChars(addressTo)}</p>
          </a>
          <p className='text-white text-base'>Amoint {amount} ETH</p>
          {message && (
            <>
            <br />
            <p className='text-white text-base message'>Message: {message}</p>
            </>
          )}
          <div className='bg-black p-3 px-4 w-max rounded-3xl py-4 mt-2 shadow-2xl'>
            <p className='text-[#37c7da] font-bold'>{timestamp}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Transactions = () => {
  const currentAccount = useContext(TransactionContext);
  return (
    <div className='flex w-full justify-center items-centr 2xl px-20 gradient-bg-transactions'>
      <div className='flex flex-col md:p-12 py-12 px-4'>
        {currentAccount ? (
          <h3 className='text-white text-3xl text-center my-2'>Latest Transactions</h3>
        ): (<h3 className='text-white text-3xl text-center my-2'>Connect to your account. </h3>
        )}
        <div className='flex flex-wrap justify-center items-center mt-10'>
          {[demoDataTransactions.reverse().map((transaction,i) => (
          <TramsactionCard key={i} {...transaction}/>
          ))]}
        </div>
      </div>
    </div>
  );
}

export default Transactions;


