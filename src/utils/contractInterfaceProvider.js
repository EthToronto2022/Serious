import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Contract, ethers } from "ethers";
import { chainIdToContract, networks, getContract } from "./networks";

const SiriusContract = "../contractArtifacts/hardhat/Sirious.json";

const useContract = () => {
  const { account, library, chainId } = useWeb3React();
  const [loading, setLoading] = useState();
  const [interestedUsers, setInterestedUsers] = useState({});
  const [userMessages, setUserMessages] = useState({});

  useEffect(() => {
    (async () => {
      if (account) {
        await getSelectedKeywords();
        await getMessages();
      }
    })();
  }, [account]);

  const getSignerInjectedContract = async () => {
    const signer = await library.getSigner();
    const contract = getContract(chainId, signer);

    return { signer, contract };
  };

  const getConsumers = async (keyword) => {
    setLoading(true);

    const contract = getContract(chainId);

    const fetchedUsers = await contract.interestedUsers(keyword);
    setInterestedUsers({ ...interestedUsers, keyword: fetchedUsers });

    setLoading(false);

    return fetchedUsers;
  };

  const getConsumerMessages = async (userAddr, keyword) => {
    setLoading(true);

    const contract = getContract(chainId);

    const fetchedMessages = await contract.userToMessages(userAddr, keyword);
    setUserMessages({
      [userAddr]: {
        ...userMessages[userAddr],
        [keyword]: fetchedMessages,
      },
    });

    setLoading(false);

    return fetchedMessages;
  };

  const addCompany = async (name, description, keyword, url, image) => {
    setLoading(true);

    const { contract } = await getSignerInjectedContract();

    await contract.addCompany(name, description, keyword, url, image);

    setLoading(false);
  };

  return {
    interestedUsers,
    userMessages,
    getConsumers,
    getConsumerMessages,
    getMessagesOfConsumers,
    addCompany,
    loading,
  };
};
