import { useWeb3Contract } from "react-moralis";
import { abi, contractAddresses } from "../constants";
import { useMoralis } from "react-moralis";
import { useEffect, useState } from "react";


export default function Vault() {
  const { chainId: chainIdHex, isWeb3Enabled } = useMoralis();
  const chainId = parseInt(chainIdHex);
  const vaultaddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null;
  const [vault, setVault] = useState("0")

  const {runContractFunction: getVault} = useWeb3Contract({
    abi: abi,
    contractAddress: vaultaddress,
    functionName: "getVault",
    params: {}
  })

  const {runContractFunction: deposit} = useWeb3Contract({
    abi: abi,
    contractAddress: vaultaddress,
    functionName: "deposit",
    params: {},
    msgValue: vault
  })

  useEffect(() => {
    if (isWeb3Enabled) {
      async function updateUI() {
        const vaultFromCall = await getVault()
        setVault(vaultFromCall)
      }
      updateUI()
    }
  }, [isWeb3Enabled])

  return (<div>
    { vaultaddress ? (<div>We're so sorry, the frontend is not yet ready. Kindly check back soon!</div> ) : ( <div>Connect your Wallet to Take Loans</div> )}
      
    </div>
  )
}