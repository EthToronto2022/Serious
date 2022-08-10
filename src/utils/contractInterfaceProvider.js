import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Contract, ethers } from "ethers";
import { chainIdToContract, networks } from "./networks";
const SiriusContract = "../contractArtifacts/hardhat/Sirious.json";

const useContract = () => {
  const { account, library, chainId } = useWeb3React();
  const [loading, setLoading] = useState();



  useEffect(() => {
    if (account) {
      await getSelectedKeywords();
      await getMessages()
    }

  }, [account]);

  const getConsumers = async () => {};

  const getMessagesOfConsumers = async () => {};




};


