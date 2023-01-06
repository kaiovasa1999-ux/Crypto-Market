import React, {useContext }from 'react';
import {TransactionContext} from "../context/TransactionContext.jsx";
// import {demoDataTransactions} from "../utils/demoDataTransactions";

const Transactions = () => {
  const currentAccount = useContext(TransactionContext);
  return (
    <div className='flex w-full justify-center items-centr 2xl px-20 gradient-bg-transactions'>
      <div className='flex flex-col md:p-12 py-12 px-4'>
        {currentAccount ? (
          <h3 className='text-white text-3xl text-center my-2'>Latest Transactions</h3>
        ):<h3 className='text-white text-3xl text-center my-2'>Connect to your account. </h3>
        }
      </div>
    </div>
  );
}

export default Transactions;
