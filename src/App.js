import './App.css';
import WebModal from 'web3modal';
import { ethers } from "ethers";
import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";

const providerOptions = {

  coinbasewallet: {
    //@Baldwin add coibase wallet 
    package: CoinbaseWalletSDK,
    Options: {
      appName: "LendVest Credit Score",
      infuraId: { 3: "" }
    }


  }


}

function App() {

  async function connectWallet() {

    try {
      let web3Modal = new WebModal({
        cacheProvider: false,
        providerOptions,
      });
      //connecting with the wallet 
      const web3ModalInstance = await web3Modal.connect();
      //allows us to interact with the wallet 
      const web3ModalProvider = new ethers.providers.Web3Provider(web3ModalInstance);
      //debug
      console.log(web3ModalProvider);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">

        <h1>Web3Modal Connection</h1>
        <button onClick={connectWallet}>Connect Wallet</button>
      </header>
    </div>
  );
}

export default App;
