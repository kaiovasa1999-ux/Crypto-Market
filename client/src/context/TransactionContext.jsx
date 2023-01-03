import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () =>{
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner();
    const transactionsContract= new ethers.Contract(contractAddress,contractABI,signer);

    return transactionsContract;
}


export const TransactionProvider = ({children}) => {
    const [currentAccount,setCurrentAccount] = useState('');
    const [formData,setFormData] = useState({addressTo:'',amount:'',keyword:'',message:''})
    const [isLoading,setIsLoading] = useState(false);
    const [transactionCount,setTransactionCount] = useState(localStorage.getItem('transactionCount'));

    const handleChanges = (e,name) =>{
      setFormData((prevState) => ({...prevState,[name]:e.target.value}))
    }

    const checkIfWalletIsConnected = async () =>{

      try {

        if(!ethereum) return alert ("Please install Metamask")

        const accounts = await ethereum.request({method: "eth_accounts"});
        if(accounts.length){
          // do something
        }else{
          console.log("No accounts detected!")
        }

      } catch (error) {
        console.log(error);
  
        throw new Error("No ethereum object");
      }
    }
    
    const connectWallet = async () => {
      try {
        if (!ethereum) return alert("Please install MetaMask.");
  
        const accounts = await ethereum.request({ method: "eth_requestAccounts", });
  
        setCurrentAccount(accounts[0]);
        window.location.reload();
      } catch (error) {
        console.log(error);
  
        throw new Error("No ethereum object");
      }
    };

    const MakeTransaction = async () =>{
      try {
        
        if(!ethereum) return alert ("Please install Metamask")

        const {addressTo,amount,keyword,message} = formData;
        const transactionContract = getEthereumContract();
        const parseAmount = ethereum.utils.parseEther(amount);

        await ethereum.request({method: 'sendTransaction',params:
         [{
          from: currentAccount,
          to: addressTo,
          gas: '0x0012', //wai 18
          value: parseAmount._hex,
        }]
      });
      const transactionHash =  await transactionContract.addToBlockchain(addressTo,parseAmount,message,keyword)
      setIsLoading(true);

      console.log(`loading -${transactionHash.hash}`);
      await transactionHash.wait();
      setIsLoading(false);

      console.log(`done -${transactionHash.hash}`);
      const transactionCount = transactionContract.getTransactionCount();
      setTransactionCount(transactionCount.toNumber());
     

      } catch (error) {
        console.log(error);
        throw new Error("No ethereum object");
      }
    }

    useEffect(() =>{
        checkIfWalletIsConnected();
    },[]);
    return (
        <TransactionContext.Provider value={{connectWallet,currentAccount,formData,MakeTransaction,handleChanges}}>
            {children}
        </TransactionContext.Provider>
    )
}