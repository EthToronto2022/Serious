import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { getContract } from "./networks";

export const useUserContract = () => {
  const { account, library, chainId } = useWeb3React();
  const [loading, setLoading] = useState();

  const [keywords, setKeywords] = useState([]);
  const [messages, setMessages] = useState([]);

  const initalize = async () => {
    await getSelectedKeywords();
  };

  useEffect(() => {
    if (account) {
      initalize();
    }
  }, [account]);

  const getSelectedKeywords = async () => {
    setLoading(true);

    try {
      const contract = getContract(chainId);

      const keywords = await contract.getUserKeywords(account);
      keywords.length && setKeywords(keywords);
    } catch (err) {
      console.error(err);
      setKeywords([]);
    }
    setLoading(false);
  };

  const getMessages = async (keyword) => {
    setLoading(true);

    try {
      const contract = getContract(chainId);

      const messages = await contract.userToMessages(account, keyword);
      setMessages(messages);
    } catch (err) {
      console.log(err);
      setMessages([]);
    }

    setLoading(false);
  };

  const setKeyword = async (keyword) => {
    setLoading(true);

    try {
      const signer = await library.getSigner();
      const contract = getContract(chainId, signer);

      const tx = await contract.setKeyword(keyword, {
        value: ethers.utils.parseEther("0.01"),
      });

      return tx.hash;
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const setPledges = async (companies) => {
    setLoading(true);

    try {
      const signer = await library.getSigner();
      const contract = getContract(chainId, signer);

      const tx = await contract.setPledges(companies);

      return tx.hash;
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const verifyCode = async (keyword) => {
    setLoading(true);

    try {
      const signer = await library.getSigner();
      const contract = getContract(chainId, signer);

      // const message = await contract.verifyCode(keyword, account);
    } catch (err) {
      setMessages([]);
    }

    setLoading(false);
  };

  const withdrawForEscrow = async (keyword) => {};

  return {
    loading,
    keywords,
    messages,
    setKeyword,
    getMessages,
    verifyCode,
    setPledges,
  };
};
