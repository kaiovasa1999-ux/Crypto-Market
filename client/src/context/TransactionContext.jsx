import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () =>{
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner();
    const transactionsContract= new ethers.Contract(contractAddress,contractABI,signer);

    console.log(provider,signer,transactionsContract)
}


export const TransactionProvider = ({children}) => {
    const [currentAccount,setCurrentAccount] = useState('');
    const [formData,setFormData] = useState({addressTo:'',amount:'',keyword:'',message:''})

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

        getEthereumContract();
        
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