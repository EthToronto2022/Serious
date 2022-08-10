import { ethers } from "ethers";

const BASE_ICON_PATH = "src/images/icons";

export const PRODUCT_LIST = [
  {
    id: "mortgage",
    title: "Mortgages",
    iconPath: `${BASE_ICON_PATH}/home.png`,
  },
  {
    id: "lawyer",
    title: "Lawyers",
    iconPath: `${BASE_ICON_PATH}/mace.png`,
  },
];

export const PROVIDER_LIST = [
  {
    companyAdmin: ethers.constants.AddressZero,
    priceRating: 4,
    accuracyRating: 4,
    serviceRating: 5,
    keyword: "lawyer",
    name: "Ratehub Mortage",
    description: "hi",
    url: "https://google.ca",
    image: "...",
  },
  {
    companyAdmin: ethers.constants.AddressZero,
    priceRating: 4,
    accuracyRating: 4,
    serviceRating: 5,
    keyword: "lawyer",
    name: "Scotiabank",
    description: "hi",
    url: "https://google.ca",
    image: "...",
  },
];
