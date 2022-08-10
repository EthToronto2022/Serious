import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Contract, ethers } from "ethers";
import { chainIdToContract, networks } from "./networks";

const useContract = () => {
  const { account, library, chainId } = useWeb3React();
  const [loading, setLoading] = useState();

  const [keywords, setKeywords] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (account) {
      await getSelectedKeywords();
      await getMessages()
    }

  }, [account]);

  const getSelectedKeywords = async () => {
    setLoading(true);

    try {
      const signer = await library.getSigner();
      const contract = getContract(chainIdToContract[chainId], chainId, signer);

      const keywords = await contract.userSelectedKeywords(account);
      setKeywords(keywords);
    } catch (err) {
      setKeywords([]);
    }
    setLoading(false);
  };

  const getMessages = async () => {
    setLoading(true);

    try {
      const signer = await library.getSigner();
      const contract = getContract(chainIdToContract[chainId], chainId, signer);

      const messages = await contract.getMessages(account);
      setMessages(messages);

    } catch (err) {
      setMessages([]);
    }

    setLoading(false);
  };

  const verifyCode = async (keyword) => {
    setLoading(true);

    try {
      const signer = await library.getSigner();
      const contract = getContract(chainIdToContract[chainId], chainId, signer);

      // const message = await contract.verifyCode(keyword, account);
      setMessages(messages.concat(message));
    } catch (err) {
      setMessages([]);
    }

    setLoading(false);
  }

  const withdrawForEscrow = async (keyword) => {

  }




};
