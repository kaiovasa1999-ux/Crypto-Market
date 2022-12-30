import React,{useEffect,useState} from "react";
import {ethers} from 'ethers';

import {contractABI,contractAddres} from '../utils/constants';

export const TransactionContext = React.createContext();

const {ethereum} = window;

const getEthereumContract = () =>{
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionsContract= new ethers.Contract(contractAddres,contractABI,signer);

    console.log(provider,signer,transactionsContract)
}


export const TransactionProvider = ({children}) =>{
    const [connectedAccount,setConnectedAccount] = useState('');

    const checkIfWalletIsConnected = async () =>{
        if(!ethereum) return alert ("Please install Metamask")
        const accounts = await ethereum.request({method: "eth_accounts"});
        console.log(accounts);
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

    useEffect(() =>{
        checkIfWalletIsConnected();

    },[]);
    return (
        <TransactionContext.Provider value={connectWallet}>
            {children}
        </TransactionContext.Provider>
    )
}