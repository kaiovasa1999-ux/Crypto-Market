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
    const [currentAccount,setCurrentAccount] = useState("");
    const [formData,setFormData] = useState({addressTo:'',amount:'',keyword:'',message:''})
    const [isLoading,setIsLoading] = useState(false);
    const [transactionCount,setTransactionCount] = useState(localStorage.getItem('transactionCount'));

    const handleChanges = (e,name) =>{
      setFormData((prevState) => ({...prevState,[name]:e.target.value}))
    }

    const checkIfWalletIsConnected = async () =>{

      try {0x08309fFE38177Fb40642e3E45a8C7469c3f69547

        if(!ethereum) return alert ("Please install Metamask")

        const accounts = await ethereum.request({method: "eth_accounts"});
        if(accounts.length > 0) {
          setCurrentAccount(accounts[0]);
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
  
        const accounts = await ethereum.request({ method: "eth_sendTransaction", });

        window.location.reload();
      } catch (error) {
        console.log(error);
  
        throw new Error("No ethereum object");
      }
    };

    const MakeTransaction = async () =>{
      try {
        
        if(!ethereum) return alert ("Please install Metamask")

        const { addressTo, amount, keyword, message } = formData;
        const transactionsContract = getEthereumContract();
        const parsedAmount = ethers.utils.parseEther(amount);

        await ethereum.request({
          method: "eth_requestAccounts",
          params: [{
            from: currentAccount,
            to: addressTo,
            gas: "0x5208",
            value: parsedAmount._hex,
          }],
        });

        const transactionHash = await transactionsContract.addToBlockchain(addressTo, parsedAmount, message, keyword);

        setIsLoading(true);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        console.log(`Success - ${transactionHash.hash}`);
        setIsLoading(false);

        const transactionsCount = await transactionsContract.getTransactionCount();

        setTransactionCount(transactionsCount.toNumber());
        window.location.reload();

      } catch (error) {
        console.log(error);
        throw new Error("No ethereum object");
      }
    }

    useEffect(() =>{
        checkIfWalletIsConnected();
    },[]);
    return (
        <TransactionContext.Provider
         value={{connectWallet,
                currentAccount,
                formData,
                MakeTransaction,
                handleChanges}}>
             {children}
        </TransactionContext.Provider>
    )
}