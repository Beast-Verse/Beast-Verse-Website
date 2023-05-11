import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import {ConnectButton} from "@rainbow-me/rainbowkit";
import Mint from "./mint"


const { chains, provider } = configureChains(
	[mainnet, polygon, optimism, arbitrum],
	[
	  alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
	  publicProvider()
	]
  );
  
  const { connectors } = getDefaultWallets({
	appName: 'My RainbowKit App',
	projectId: 'YOUR_PROJECT_ID',
	chains
  });
  
  const wagmiConfig = createConfig({
	autoConnect: true,
	connectors,
	provider
  })

  function Dapp(){
    return (
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains}>
                <ConnectButton/>
            </RainbowKitProvider>
        </WagmiConfig>
    )

  }

  export default Dapp;

